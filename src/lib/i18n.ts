import { dictionaries, DEFAULT_LANG, isLang, type Lang } from "../content";
import type { Content } from "../content/types";

const STORAGE_KEY = "cf-lang";
const EVENT_NAME = "cf:langchange";

export function getLang(): Lang {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (isLang(stored)) return stored;
  const browserLang = navigator.language.slice(0, 2);
  return browserLang === "de" ? "de" : DEFAULT_LANG;
}

export function getContent(lang: Lang = getLang()): Content {
  return dictionaries[lang];
}

function resolvePath(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

export function applyStaticI18n(content: Content, root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (!key) return;
    const value = resolvePath(content, key);
    if (typeof value === "string") {
      el.textContent = value;
    }
  });

  root.querySelectorAll<HTMLElement>("[data-i18n-attr]").forEach((el) => {
    const spec = el.dataset.i18nAttr;
    if (!spec) return;
    for (const pair of spec.split(";")) {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      if (!attr || !key) continue;
      const value = resolvePath(content, key);
      if (typeof value === "string") el.setAttribute(attr, value);
    }
  });

  document.documentElement.lang = getLang();
  const titleKey = root === document ? "meta.title" : undefined;
  if (titleKey) {
    const title = resolvePath(content, titleKey);
    if (typeof title === "string") document.title = title;
  }
}

export function setLang(lang: Lang): void {
  localStorage.setItem(STORAGE_KEY, lang);
  const content = getContent(lang);
  applyStaticI18n(content);
  window.dispatchEvent(new CustomEvent<{ lang: Lang; content: Content }>(EVENT_NAME, { detail: { lang, content } }));
}

export function onLangChange(cb: (lang: Lang, content: Content) => void): void {
  window.addEventListener(EVENT_NAME, (e) => {
    const { lang, content } = (e as CustomEvent<{ lang: Lang; content: Content }>).detail;
    cb(lang, content);
  });
}

export function initLangToggle(): void {
  const buttons = document.querySelectorAll<HTMLElement>("[data-lang-toggle]");
  const syncPressedState = (lang: Lang) => {
    buttons.forEach((btn) => {
      btn.querySelectorAll<HTMLElement>("[data-lang-option]").forEach((opt) => {
        const isActive = opt.dataset.langOption === lang;
        opt.classList.toggle("is-active", isActive);
        opt.setAttribute("aria-current", isActive ? "true" : "false");
      });
    });
  };

  buttons.forEach((btn) => {
    btn.querySelectorAll<HTMLElement>("[data-lang-option]").forEach((opt) => {
      opt.addEventListener("click", () => {
        const next = opt.dataset.langOption;
        if (isLang(next)) setLang(next);
      });
    });
  });

  syncPressedState(getLang());
  onLangChange((lang) => syncPressedState(lang));
}
