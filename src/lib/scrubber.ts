import { gsap, ScrollTrigger } from "./lenis";

export interface ScrubberOptions {
  canvas: HTMLCanvasElement;
  frameUrls: string[];
  trigger: HTMLElement;
  start?: string;
  end?: string;
  pin?: boolean;
  scrub?: number | boolean;
  onUpdate?: (progress: number, frameIndex: number) => void;
}

export class FrameScrubber {
  private images: HTMLImageElement[];
  private loaded: boolean[];
  private ctx: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;
  private currentFrame = 0;
  private lastDrawn = -1;
  private opts: ScrubberOptions;

  constructor(opts: ScrubberOptions) {
    this.opts = opts;
    this.canvas = opts.canvas;
    const ctx = this.canvas.getContext("2d");
    if (!ctx) throw new Error("2D canvas context unavailable");
    this.ctx = ctx;
    this.images = opts.frameUrls.map(() => new Image());
    this.loaded = opts.frameUrls.map(() => false);

    this.resize();
    window.addEventListener("resize", () => this.resize());

    this.preload();
    this.buildScrollTrigger();
  }

  private resize(): void {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = Math.round(rect.width * dpr);
    this.canvas.height = Math.round(rect.height * dpr);
    this.draw(this.currentFrame, true);
  }

  private preload(): void {
    const { frameUrls } = this.opts;
    const order = buildProgressiveOrder(frameUrls.length);
    order.forEach((i) => {
      const img = this.images[i];
      img.decoding = "async";
      img.src = frameUrls[i];
      img.onload = () => {
        this.loaded[i] = true;
        this.draw(this.currentFrame, true);
      };
    });
  }

  private nearestLoaded(index: number): number {
    if (this.loaded[index]) return index;
    for (let d = 1; d < this.images.length; d++) {
      const before = index - d;
      const after = index + d;
      if (before >= 0 && this.loaded[before]) return before;
      if (after < this.images.length && this.loaded[after]) return after;
    }
    return -1;
  }

  private draw(index: number, force = false): void {
    if (!force && index === this.lastDrawn) return;
    const useIndex = this.nearestLoaded(index);
    if (useIndex === -1) return;
    const img = this.images[useIndex];
    const cw = this.canvas.width;
    const ch = this.canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    if (!iw || !ih) return;

    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    this.ctx.clearRect(0, 0, cw, ch);
    this.ctx.drawImage(img, dx, dy, dw, dh);
    this.lastDrawn = index;
  }

  private buildScrollTrigger(): void {
    const total = this.opts.frameUrls.length - 1;
    const state = { frame: 0 };

    ScrollTrigger.create({
      trigger: this.opts.trigger,
      start: this.opts.start ?? "top top",
      end: this.opts.end ?? "bottom bottom",
      pin: this.opts.pin ?? false,
      scrub: this.opts.scrub ?? 0.4,
      onUpdate: (self) => {
        state.frame = Math.round(self.progress * total);
        this.currentFrame = state.frame;
        this.draw(state.frame);
        this.opts.onUpdate?.(self.progress, state.frame);
      },
    });
  }

  refresh(): void {
    ScrollTrigger.refresh();
  }
}

function buildProgressiveOrder(total: number): number[] {
  const order: number[] = [];
  const seen = new Set<number>();
  let step = 2 ** Math.ceil(Math.log2(Math.max(total, 1)));
  while (step >= 1) {
    for (let i = 0; i < total; i += step) {
      if (!seen.has(i)) {
        seen.add(i);
        order.push(i);
      }
    }
    step = Math.floor(step / 2);
  }
  return order;
}

export function framesForClip(clip: string, count: number, ext = "webp"): string[] {
  return Array.from({ length: count }, (_, i) => `/frames/${clip}/${String(i + 1).padStart(4, "0")}.${ext}`);
}

export { gsap, ScrollTrigger };
