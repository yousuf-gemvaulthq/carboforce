import "./styles/global.css";
import "./styles/contact.css";
import { initSmoothScroll } from "./lib/lenis";
import { getContent, applyStaticI18n, initLangToggle, onLangChange } from "./lib/i18n";
import { renderNav, renderFooter, initMobileMenu } from "./lib/chrome";
import type { Content } from "./content/types";

const content = getContent();

document.querySelector<HTMLDivElement>("#nav-root")!.innerHTML = renderNav("contact");
document.querySelector<HTMLDivElement>("#footer-root")!.innerHTML = renderFooter(content);

applyStaticI18n(content);
initMobileMenu();
initLangToggle();
initSmoothScroll();

function renderDetails(c: Content): void {
  document.querySelector<HTMLElement>("#contact-company-name")!.textContent = c.contact.details.companyName;
  document.querySelector<HTMLElement>("#contact-address")!.textContent = c.contact.details.addressLines.join(", ");
  const emailEl = document.querySelector<HTMLAnchorElement>("#contact-email")!;
  emailEl.textContent = c.contact.details.email;
  emailEl.href = `mailto:${c.contact.details.email}`;
  const phoneEl = document.querySelector<HTMLAnchorElement>("#contact-phone")!;
  phoneEl.textContent = c.contact.details.phone;
  phoneEl.href = `tel:${c.contact.details.phone.replace(/\s/g, "")}`;
}

renderDetails(content);
onLangChange((_lang, c) => renderDetails(c));

const form = document.querySelector<HTMLFormElement>("#contact-form")!;
const status = document.querySelector<HTMLElement>("#form-status")!;
const submitBtn = document.querySelector<HTMLButtonElement>("#contact-submit")!;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const lang = getContent();
  submitBtn.disabled = true;
  const originalLabel = submitBtn.textContent;
  submitBtn.textContent = lang.contact.form.sending;

  setTimeout(() => {
    status.textContent = lang.contact.form.success;
    submitBtn.disabled = false;
    submitBtn.textContent = originalLabel;
    form.reset();
  }, 700);
});
