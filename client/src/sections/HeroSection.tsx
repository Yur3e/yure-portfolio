import Container from "../components/layout/Container";
import ButtonLink from "../components/common/ButtonLink";
import { useLanguage } from "../context/LanguageContext";

export default function HeroSection() {
  const { content } = useLanguage();
  const { profile, hero } = content;

  return (
    <section id="topo" className="hero-section">
      <Container className="hero-grid">
        <div className="hero-surface">
          <div className="hero-content">
            <div className="hero-copy">
              <div className="hero-avatar">
                <img src="/images/yure-professional.jpg" alt="Yure Fernandes" />
              </div>
              <span className="hero-eyebrow-tag">{hero.available}</span>
              <h1 className="hero-title">{hero.titleLineOne} {hero.titleLineTwo}</h1>
              <p className="hero-lead">{hero.lead}</p>

              <div className="hero-actions">
                <ButtonLink href="#projetos">{hero.projectsButton}</ButtonLink>
                <ButtonLink href="#experiencia" variant="secondary">
                  {hero.experienceButton}
                </ButtonLink>
              </div>

              <a className="hero-profile-link" href={profile.github} target="_blank" rel="noreferrer">
                GitHub <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
