import "./styles/global.css";
import "./styles/about.css";
import { initSmoothScroll, ScrollTrigger } from "./lib/lenis";
import { getContent, applyStaticI18n, initLangToggle, onLangChange } from "./lib/i18n";
import { renderNav, renderPartners, renderFooter, initMobileMenu } from "./lib/chrome";
import { framesForClip, FrameScrubber } from "./lib/scrubber";
import type { Content } from "./content/types";

const content = getContent();
const FRAMES = 97;

document.querySelector<HTMLDivElement>("#nav-root")!.innerHTML = renderNav("about");
document.querySelector<HTMLDivElement>("#partners-root")!.innerHTML = renderPartners(content);
document.querySelector<HTMLDivElement>("#footer-root")!.innerHTML = renderFooter(content);

applyStaticI18n(content);
initMobileMenu();
initLangToggle();
initSmoothScroll();

function renderUnique(c: Content): void {
  const host = document.querySelector<HTMLElement>("#unique-grid")!;
  const existing = host.querySelectorAll<HTMLElement>(".unique-card");
  const wasVisible = Array.from(existing).map((el) => el.classList.contains("is-visible"));

  host.innerHTML = c.about.unique.items
    .map(
      (item, i) => `
      <div class="unique-card${wasVisible[i] ? " is-visible" : ""}" data-index="${i}">
        <span class="unique-index">0${i + 1}</span>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
      </div>`,
    )
    .join("");

  observeUniqueCards();
}

let uniqueObserver: IntersectionObserver | null = null;
function observeUniqueCards(): void {
  uniqueObserver?.disconnect();
  uniqueObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.3 },
  );
  document.querySelectorAll(".unique-card").forEach((el) => uniqueObserver!.observe(el));
}

renderUnique(content);
onLangChange((_lang, c) => {
  renderUnique(c);
  requestAnimationFrame(() => ScrollTrigger.refresh());
});

new FrameScrubber({
  canvas: document.querySelector<HTMLCanvasElement>("#about-canvas")!,
  frameUrls: framesForClip("clip8", FRAMES),
  trigger: document.querySelector<HTMLElement>("#about-backdrop")!,
  scrub: 0.6,
});

window.addEventListener("load", () => ScrollTrigger.refresh());
