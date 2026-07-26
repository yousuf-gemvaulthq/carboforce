import type { Content } from "../content/types";

export type PageKey = "home" | "process" | "about" | "contact";

const pageHref: Record<PageKey, string> = {
  home: "/",
  process: "/process.html",
  about: "/about.html",
  contact: "/contact.html",
};

export function renderNav(active: PageKey): string {
  const link = (key: PageKey, label: string) =>
    `<a href="${pageHref[key]}" data-i18n="nav.${key}" ${active === key ? 'aria-current="page"' : ""}>${label}</a>`;

  return `
  <header class="site-nav">
    <div class="container">
      <a href="/" class="nav-logo" aria-label="CARBO-FORCE home">
        <span class="dot"></span>
        CARBO-FORCE
      </a>
      <nav>
        <ul class="nav-links">
          <li>${link("home", "Home")}</li>
          <li>${link("process", "Process")}</li>
          <li>${link("about", "About")}</li>
          <li>${link("contact", "Contact")}</li>
        </ul>
      </nav>
      <div class="nav-right">
        <div class="lang-toggle" data-lang-toggle>
          <button type="button" data-lang-option="en">EN</button>
          <button type="button" data-lang-option="de">DE</button>
        </div>
        <a href="/contact.html" class="btn btn-primary" data-i18n="nav.cta">Arrange a Meeting</a>
        <button class="nav-toggle" type="button" aria-label="Toggle menu" data-mobile-toggle>
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <div class="mobile-menu" data-mobile-menu>
      <ul class="nav-links">
        <li>${link("home", "Home")}</li>
        <li>${link("process", "Process")}</li>
        <li>${link("about", "About")}</li>
        <li>${link("contact", "Contact")}</li>
      </ul>
    </div>
  </header>`;
}

export function renderPartners(content: Content): string {
  const names = content.partners.names.concat(content.partners.names);
  return `
  <section class="partners-section container">
    <div class="partners-head">
      <span class="eyebrow" data-i18n="partners.eyebrow">${content.partners.eyebrow}</span>
      <h2 data-i18n="partners.title">${content.partners.title}</h2>
    </div>
    <div class="conveyor">
      <div class="conveyor-track">
        ${names.map((n) => `<span>${n}</span>`).join("")}
      </div>
    </div>
  </section>`;
}

export function renderFooter(content: Content): string {
  return `
  <footer class="site-footer">
    <div class="container">
      <div>
        <div class="footer-brand">CARBO-FORCE</div>
        <p class="footer-tagline" data-i18n="footer.tagline">${content.footer.tagline}</p>
      </div>
      <div class="footer-cols">
        <div class="footer-col">
          <h4>Menu</h4>
          <a href="/" data-i18n="nav.home">Home</a>
          <a href="/process.html" data-i18n="nav.process">Process</a>
          <a href="/about.html" data-i18n="nav.about">About</a>
          <a href="/contact.html" data-i18n="nav.contact">Contact</a>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <p>${content.contact.details.companyName}</p>
          <p>${content.contact.details.addressLines.join(", ")}</p>
          <a href="mailto:${content.contact.details.email}">${content.contact.details.email}</a>
          <a href="tel:${content.contact.details.phone.replace(/\s/g, "")}">${content.contact.details.phone}</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <span>© ${new Date().getFullYear()} Carbo-FORCE GmbH — <span data-i18n="footer.rights">${content.footer.rights}</span></span>
      </div>
    </div>
  </footer>`;
}

export function initMobileMenu(): void {
  const toggle = document.querySelector<HTMLButtonElement>("[data-mobile-toggle]");
  const menu = document.querySelector<HTMLElement>("[data-mobile-menu]");
  if (!toggle || !menu) return;
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
  });
  menu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.classList.remove("is-open");
    }),
  );
}
