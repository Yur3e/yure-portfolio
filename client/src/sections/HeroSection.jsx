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
          <div className="hero-frame hero-frame-top">
            <span>{`STATUS: ${hero.available.toUpperCase()}`}</span>
          </div>

          <div className="hero-content">
            <div className="hero-copy">
              <h1 className="hero-title">
                <span>Building</span>
                <span className="hero-title-accent">resilient software.</span>
              </h1>
              <p className="hero-role">{profile.title}</p>
              <p className="hero-text hero-text-lead">{hero.lead}</p>
              <p className="hero-text">{profile.subtitle}</p>

              <div className="hero-actions">
                <ButtonLink href={profile.linkedin} target="_blank" rel="noreferrer">
                  {hero.linkedin}
                </ButtonLink>
                <ButtonLink href="#experiencia" variant="secondary">
                  {hero.experienceButton}
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="hero-watermark" aria-hidden="true">
            YURE
          </div>
        </div>
      </Container>
    </section>
  );
}
