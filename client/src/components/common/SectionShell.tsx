import Container from "../layout/Container";
import SectionTitle from "./SectionTitle";
import type { ReactNode } from "react";

interface SectionShellProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = ""
}: SectionShellProps) {
  return (
    <section id={id} className={`content-section ${className}`.trim()}>
      <Container>
        <div className="section-shell">
          <div className="section-shell-header">
            <SectionTitle eyebrow={eyebrow} title={title} description={description} />
            <span className="section-shell-mark" aria-hidden="true" />
          </div>
          <div className="section-shell-body">{children}</div>
        </div>
      </Container>
    </section>
  );
}
