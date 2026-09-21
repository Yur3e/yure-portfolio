import SectionShell from "../components/common/SectionShell";
import { useLanguage } from "../context/LanguageContext";

export default function AboutSection() {
  const { content } = useLanguage();
  const { about } = content;

  return (
    <SectionShell
      id="sobre"
      eyebrow={about.eyebrow}
      title={about.title}
      description={about.description}
    >
      <div className="about-grid">
        <div className="content-card about-copy-card">
          {about.paragraphs.slice(0, 1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
