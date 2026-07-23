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
                <span>{hero.titleLineOne}</span>
                <span className="hero-title-accent">{hero.titleLineTwo}</span>
              </h1>
              <p className="hero-signature">{hero.signature}</p>

              <div className="hero-actions">
                <ButtonLink href={profile.linkedin} target="_blank" rel="noreferrer">
                  {hero.linkedin}
                </ButtonLink>
                <ButtonLink href="#experiencia" variant="secondary">
                  {hero.experienceButton}
                </ButtonLink>
              </div>
            </div>

            <aside className="hero-portrait-shell" aria-label={hero.portraitLabel}>
              <div className="hero-portrait-frame">
                <img
                  className="hero-portrait-image"
                  src="/images/yure-profile.jpg"
                  alt={hero.portraitAlt}
                  loading="eager"
                  decoding="async"
                />
                <div className="hero-portrait-scan" aria-hidden="true" />
              </div>
            </aside>
          </div>

          <div className="hero-watermark" aria-hidden="true">
            YURE
          </div>
        </div>
      </Container>
    </section>
  );
}
