interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionTitle({ eyebrow, title, description = "" }: SectionTitleProps) {
  return (
    <div className="section-title">
      <div className="section-title-row">
        <p className="section-eyebrow">// {eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}
