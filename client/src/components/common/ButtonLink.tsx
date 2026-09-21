import { scrollToSection } from "../../utils/scrollToSection";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  rel?: string;
}

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  target,
  rel
}: ButtonLinkProps) {
  const isSectionLink = href?.startsWith("#");
  const className = variant === "secondary" ? "button button-secondary" : "button";

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!isSectionLink) {
      return;
    }

    event.preventDefault();
    scrollToSection(href);
  }

  return (
    <a
      href={isSectionLink ? "/" : href}
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
