import SectionShell from "../components/common/SectionShell";
import { useLanguage } from "../context/LanguageContext";

export default function ExperienceSection() {
  const { content } = useLanguage();
  const { experienceSection, experience, credentialsSection } = content;

  return (
    <SectionShell
      id="experiencia"
      eyebrow={experienceSection.eyebrow}
      title={experienceSection.title}
      description={experienceSection.description}
    >
      <div className="experience-timeline">
        {experience.map((item) => (
          <article key={`${item.title}-${item.company}`} className="experience-entry">
            <div className="experience-entry-rail" aria-hidden="true">
              <span className="experience-entry-dot" />
            </div>

            <div className="experience-entry-meta">
              <span>{item.period.toUpperCase()}</span>
              <strong>{item.company}</strong>
            </div>

              <div className="experience-card">
                <div className="experience-header">
                <h3>{item.title}</h3>
                <p className="experience-company">{item.employmentType}</p>
              </div>

              <p className="experience-meta">
                {item.location} · {item.mode}
              </p>

              {item.note ? <p className="experience-note">{item.note}</p> : null}

              {item.bullets.length ? (
                <ul className="experience-bullets">
                  {item.bullets.slice(0, 2).map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}

              {item.tech.length ? (
                <div className="experience-tech-list">
                  {item.tech.slice(0, 5).map((tech) => (
                    <span key={tech} className="experience-tech">
                      {tech}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      {credentialsSection ? (
        <div id="formacao" className="credentials-block">
          <div className="credentials-topic">
            <p className="section-eyebrow">// {credentialsSection.title}</p>
            <h3>{credentialsSection.educationTitle}</h3>
          </div>
          <div className="credentials-grid">
            <div className="credential-card">
              <div className="credential-list">
                {credentialsSection.education.map((edu) => (
                  <div key={edu.degree} className="credential-item">
                    <div className="credential-item-header">
                      <strong>{edu.degree}</strong>
                      <span className="credential-badge">{edu.badge}</span>
                    </div>
                    <p className="credential-institution">{edu.institution}</p>
                    <span className="credential-status">{edu.status}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      ) : null}
    </SectionShell>
  );
}
