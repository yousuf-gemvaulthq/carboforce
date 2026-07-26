import "./styles/global.css";
import "./styles/home.css";
import { initSmoothScroll, gsap, ScrollTrigger } from "./lib/lenis";
import { getContent, applyStaticI18n, initLangToggle, onLangChange } from "./lib/i18n";
import { renderNav, renderPartners, renderFooter, initMobileMenu } from "./lib/chrome";
import { initCountUp } from "./lib/countup";
import { framesForClip, FrameScrubber } from "./lib/scrubber";

const content = getContent();

document.querySelector<HTMLDivElement>("#nav-root")!.innerHTML = renderNav("home");
document.querySelector<HTMLDivElement>("#partners-root")!.innerHTML = renderPartners(content);
document.querySelector<HTMLDivElement>("#footer-root")!.innerHTML = renderFooter(content);

applyStaticI18n(content);
initMobileMenu();
initLangToggle();
initSmoothScroll();

const FRAMES_PER_CLIP = 97;
const heroFrames = [
  ...framesForClip("clip1", FRAMES_PER_CLIP),
  ...framesForClip("clip2", FRAMES_PER_CLIP),
  ...framesForClip("clip3", FRAMES_PER_CLIP),
  ...framesForClip("clip4", FRAMES_PER_CLIP),
];

const heroCanvas = document.querySelector<HTMLCanvasElement>("#hero-canvas")!;
const heroSection = document.querySelector<HTMLElement>("#hero-scrub")!;
const progressBar = document.querySelector<HTMLElement>("#hero-progress-bar")!;
const scrollHint = document.querySelector<HTMLElement>(".hero-scroll-hint")!;
const line1 = document.querySelector<HTMLElement>(".hero-line-1")!;
const line2 = document.querySelector<HTMLElement>(".hero-line-2")!;
const brandLine = document.querySelector<HTMLElement>(".hero-brand")!;

new FrameScrubber({
  canvas: heroCanvas,
  frameUrls: heroFrames,
  trigger: heroSection,
  start: "top top",
  end: "bottom bottom",
  scrub: 0.5,
  onUpdate: (progress) => {
    progressBar.style.width = `${progress * 100}%`;
    scrollHint.style.opacity = progress > 0.02 ? "0" : "1";

    line1.classList.toggle("is-active", progress >= 0.0 && progress < 0.3);
    line2.classList.toggle("is-active", progress >= 0.32 && progress < 0.62);
    brandLine.classList.toggle("is-active", progress >= 0.84);
  },
});

const statEls = document.querySelectorAll<HTMLElement>("[data-stat]");
function mountStats() {
  statEls.forEach((el) => {
    const idx = Number(el.dataset.stat);
    const stat = content.home.stats[idx];
    if (!stat) return;
    initCountUp(el, stat.value, { prefix: stat.prefix, suffix: stat.suffix });
  });
}
mountStats();

onLangChange(() => ScrollTrigger.refresh());
window.addEventListener("load", () => ScrollTrigger.refresh());
void gsap;
