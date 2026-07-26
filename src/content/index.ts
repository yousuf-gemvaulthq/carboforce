import { en } from "./en";
import { de } from "./de";
import type { Content } from "./types";

export type Lang = "en" | "de";

export const dictionaries: Record<Lang, Content> = { en, de };

export const DEFAULT_LANG: Lang = "en";

export function isLang(value: string | null | undefined): value is Lang {
  return value === "en" || value === "de";
}
