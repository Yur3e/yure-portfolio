import SectionShell from "../components/common/SectionShell";
import { useLanguage } from "../context/LanguageContext";

export default function StacksSection() {
  const { content } = useLanguage();
  const { stacks: stacksContent } = content;

  return (
    <SectionShell
      id="stacks"
      eyebrow={stacksContent.eyebrow}
      title={stacksContent.title}
      description={stacksContent.description}
    >
      <div className="tech-node-grid">
        {stacksContent.groups.map((group) => (
          <article key={group.id} className="stack-group-card tech-node-card">
            <p className="tech-node-title">{group.title}</p>
            <div className="tech-node-list">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
