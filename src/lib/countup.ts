import { gsap } from "./lenis";

export interface CountUpOptions {
  prefix?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
}

export function initCountUp(el: HTMLElement, target: number, options: CountUpOptions = {}): void {
  const { prefix = "", suffix = "", duration = 1.6, decimals = 0 } = options;
  const state = { value: 0 };
  let played = false;

  const format = (v: number) =>
    `${prefix}${Math.round(v).toLocaleString(document.documentElement.lang === "de" ? "de-DE" : "en-US")}${suffix}`;

  el.textContent = format(0);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !played) {
          played = true;
          gsap.to(state, {
            value: target,
            duration,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = format(state.value);
            },
          });
          observer.disconnect();
        }
      });
    },
    { threshold: 0.4 },
  );

  observer.observe(el);
  void decimals;
}
