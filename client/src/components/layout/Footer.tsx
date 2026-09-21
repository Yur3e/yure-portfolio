import type { MouseEvent, ReactNode } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { scrollToSection } from "../../utils/scrollToSection";
import Container from "./Container";

interface SocialLinkProps {
  href: string;
  label: string;
  children: ReactNode;
}

function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <a href={href} aria-label={label} target="_blank" rel="noreferrer" className="footer-social-link">
      {children}
    </a>
  );
}

export default function Footer() {
  const { content, language } = useLanguage();
  const { profile } = content;
  const copy = language === "pt"
    ? {
        find: "Encontre-me também em",
        explore: "Explorar",
        background: "Trajetória",
        connect: "Conectar",
        resources: "Contato",
        about: "Sobre mim",
        projects: "Projetos recentes",
        experience: "Experiência",
        education: "Formação",
        skills: "Tecnologias",
        home: "Início",
        email: "E-mail",
        whatsapp: "WhatsApp"
      }
    : {
        find: "Find me elsewhere",
        explore: "Explore",
        background: "Background",
        connect: "Connect",
        resources: "Contact",
        about: "About",
        projects: "Recent projects",
        experience: "Experience",
        education: "Education",
        skills: "Skills",
        home: "Home",
        email: "Email",
        whatsapp: "WhatsApp"
      };

  function handleSectionClick(event: MouseEvent<HTMLAnchorElement>, hash: string) {
    event.preventDefault();
    scrollToSection(hash);
  }

  return (
    <footer className="site-footer">
      <Container className="site-footer-shell">
        <div className="footer-social-row">
          <p>{copy.find}</p>
          <div className="footer-social-links">
            <SocialLink href={profile.github} label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.58 2 12.1c0 4.42 2.87 8.18 6.84 9.5.5.1.68-.22.68-.48v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.7 9.7 0 0 1 12 6.93c.85 0 1.7.12 2.5.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86v2.75c0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12.1C22 6.58 17.52 2 12 2Z" />
              </svg>
            </SocialLink>
            <SocialLink href={profile.linkedin} label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45H16.9v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.04c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.23 0Z" />
              </svg>
            </SocialLink>
            <a href={`mailto:${profile.email}`} aria-label={copy.email} className="footer-social-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="m22 7-8.99 5.73a2 2 0 0 1-2.01 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-links-grid">
          <div>
            <h2>{copy.explore}</h2>
            <a href="/" onClick={(event) => handleSectionClick(event, "#topo")}>{copy.home}</a>
            <a href="/" onClick={(event) => handleSectionClick(event, "#sobre")}>{copy.about}</a>
            <a href="/" onClick={(event) => handleSectionClick(event, "#projetos")}>{copy.projects}</a>
          </div>
          <div>
            <h2>{copy.background}</h2>
            <a href="/" onClick={(event) => handleSectionClick(event, "#experiencia")}>{copy.experience}</a>
            <a href="/" onClick={(event) => handleSectionClick(event, "#formacao")}>{copy.education}</a>
            <a href="/" onClick={(event) => handleSectionClick(event, "#stacks")}>{copy.skills}</a>
          </div>
          <div>
            <h2>{copy.connect}</h2>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.email}`}>{copy.email}</a>
          </div>
          <div>
            <h2>{copy.resources}</h2>
            <a href={profile.whatsappUrl} target="_blank" rel="noreferrer">{copy.whatsapp}</a>
            <a href={`mailto:${profile.email}`}>{copy.email}</a>
            <a href="/" onClick={(event) => handleSectionClick(event, "#contato")}>{content.contact.eyebrow}</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Yure Fernandes</p>
          <div>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span>{profile.location}</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
