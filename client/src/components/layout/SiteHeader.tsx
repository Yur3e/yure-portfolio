import Container from "./Container";
import LanguageSwitcher from "../LanguageSwitcher";
import { useLanguage } from "../../context/LanguageContext";
import { scrollToSection } from "../../utils/scrollToSection";
import type { MouseEvent } from "react";

export default function SiteHeader() {
  const { content } = useLanguage();
  const { profile, about, stacks, projectsSection, experienceSection, contact } = content;
  const navItems = [
    { href: "#sobre", label: about.eyebrow },
    { href: "#stacks", label: stacks.eyebrow },
    { href: "#projetos", label: projectsSection.eyebrow },
    { href: "#experiencia", label: experienceSection.eyebrow },
    { href: "#contato", label: contact.eyebrow }
  ];

  function handleSectionClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    scrollToSection(href);
  }

  return (
    <header className="site-header">
      <Container className="site-header-shell">
        <a
          href="/"
          className="site-brand"
          aria-label={profile.name}
          onClick={(event) => handleSectionClick(event, "#topo")}
        >
          <span className="site-brand-logo-wrap" aria-hidden="true">
            <img
              src="/brand/yure-logo-mark.png"
              alt=""
              className="site-brand-logo site-brand-logo-dark"
            />
            <img
              src="/brand/yure-logo-light-mark.png"
              alt=""
              className="site-brand-logo site-brand-logo-light"
            />
          </span>
          <span className="site-brand-name">Yure Fernandes</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href="/"
              className="site-nav-link"
              onClick={(event) => handleSectionClick(event, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageSwitcher />
          <a
            className="header-contact-link"
            href="/"
            onClick={(event) => handleSectionClick(event, "#contato")}
          >
            {contact.eyebrow}
          </a>
        </div>
      </Container>
    </header>
  );
}
