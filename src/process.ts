import "./styles/global.css";
import "./styles/process.css";
import { initSmoothScroll, ScrollTrigger } from "./lib/lenis";
import { getContent, applyStaticI18n, initLangToggle, onLangChange } from "./lib/i18n";
import { renderNav, renderFooter, initMobileMenu } from "./lib/chrome";
import { framesForClip, FrameScrubber } from "./lib/scrubber";
import type { Content } from "./content/types";

const content = getContent();
const FRAMES = 97;

document.querySelector<HTMLDivElement>("#nav-root")!.innerHTML = renderNav("process");
document.querySelector<HTMLDivElement>("#footer-root")!.innerHTML = renderFooter(content);

applyStaticI18n(content);
initMobileMenu();
initLangToggle();
initSmoothScroll();

const APPLICATION_ICONS = [
  // agriculture — leaf
  '<path d="M20 5c-9 0-15 6-15 15 0 6 4 10 10 10 9 0 15-6 15-15 0-6-4-10-10-10Z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M6 34C14 26 22 18 30 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  // construction — building
  '<rect x="7" y="10" width="26" height="24" fill="none" stroke="currentColor" stroke-width="2"/><path d="M7 18h26M13 10v24M20 10v24M27 10v24" stroke="currentColor" stroke-width="1.4"/>',
  // water filtration — droplet
  '<path d="M20 4C13 15 8 21 8 27a12 12 0 0 0 24 0c0-6-5-12-12-23Z" fill="none" stroke="currentColor" stroke-width="2"/>',
  // carbon credits — badge check
  '<circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" stroke-width="2"/><path d="M13 20l5 5 9-10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
];

function renderDynamic(c: Content): void {
  const chipsHost = document.querySelector<HTMLElement>("#intake-chips")!;
  chipsHost.innerHTML = c.process.intake.chips
    .map((chip, i) => `<span class="intake-chip" data-chip="${i}">${chip}</span>`)
    .join("");

  const layerHost = document.querySelector<HTMLElement>("#layer-callouts")!;
  layerHost.innerHTML = c.process.exploded.layers
    .map(
      (layer, i) => `
      <div class="layer-callout" data-layer="${i}">
        <span class="layer-index">0${i + 1} / 05</span>
        <h3>${layer.name}</h3>
        <p>${layer.desc}</p>
      </div>`,
    )
    .join("");

  const progressHost = document.querySelector<HTMLElement>("#layer-progress")!;
  progressHost.innerHTML = c.process.exploded.layers.map((_, i) => `<span data-dot="${i}"></span>`).join("");

  const appsHost = document.querySelector<HTMLElement>("#applications-grid")!;
  appsHost.innerHTML = c.process.applications.items
    .map(
      (item, i) => `
      <div class="application-card">
        <svg class="application-icon" viewBox="0 0 40 40">${APPLICATION_ICONS[i] ?? ""}</svg>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
      </div>`,
    )
    .join("");
}

renderDynamic(content);
onLangChange((_lang, c) => {
  renderDynamic(c);
  requestAnimationFrame(() => ScrollTrigger.refresh());
});

// ---------- Intake scrub ----------
new FrameScrubber({
  canvas: document.querySelector<HTMLCanvasElement>("#intake-canvas")!,
  frameUrls: framesForClip("clip5", FRAMES),
  trigger: document.querySelector<HTMLElement>("#intake-section")!,
  scrub: 0.4,
  onUpdate: (progress) => {
    document.querySelectorAll<HTMLElement>(".intake-chip").forEach((chip) => {
      const i = Number(chip.dataset.chip);
      chip.classList.toggle("is-active", progress > 0.15 + i * 0.18);
    });
  },
});

// ---------- Exploded view (pinned) ----------
new FrameScrubber({
  canvas: document.querySelector<HTMLCanvasElement>("#exploded-canvas")!,
  frameUrls: framesForClip("clip6", FRAMES),
  trigger: document.querySelector<HTMLElement>("#exploded-section")!,
  scrub: 0.5,
  onUpdate: (progress) => {
    const stage = Math.min(4, Math.floor(progress * 5));
    document.querySelectorAll<HTMLElement>(".layer-callout").forEach((el) => {
      el.classList.toggle("is-active", Number(el.dataset.layer) === stage);
    });
    document.querySelectorAll<HTMLElement>("#layer-progress span").forEach((dot) => {
      dot.classList.toggle("is-active", Number(dot.dataset.dot) === stage);
    });
    document.querySelector<HTMLElement>("#self-sufficiency")!.classList.toggle("is-active", stage === 2);
  },
});

// ---------- Dual output ----------
new FrameScrubber({
  canvas: document.querySelector<HTMLCanvasElement>("#dual-canvas")!,
  frameUrls: framesForClip("clip7", FRAMES),
  trigger: document.querySelector<HTMLElement>("#dual-output-section")!,
  scrub: 0.4,
  onUpdate: (progress) => {
    document.querySelector<HTMLElement>("#dual-biochar")!.classList.toggle("is-active", progress < 0.55);
    document.querySelector<HTMLElement>("#dual-energy")!.classList.toggle("is-active", progress >= 0.45);
  },
});

// ---------- Data section reveal ----------
const dataSection = document.querySelector<HTMLElement>(".data-section")!;
new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        dataSection.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.35 },
).observe(dataSection);

window.addEventListener("load", () => ScrollTrigger.refresh());
