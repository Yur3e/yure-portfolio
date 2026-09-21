export interface ProfileContent {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  phone: string;
  whatsappUrl: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface LanguageSwitcherContent {
  pt: string;
  en: string;
}

export interface HeroContent {
  available: string;
  titleLineOne: string;
  titleLineTwo: string;
  lead: string;
  projectsButton: string;
  experienceButton: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  description?: string;
  paragraphs: string[];
}

export interface StackGroup {
  id: string;
  title: string;
  items: string[];
}

export interface StacksContent {
  eyebrow: string;
  title: string;
  description?: string;
  groups: StackGroup[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  demo: string;
  repo: string;
}

export interface ProjectsSectionContent {
  eyebrow: string;
  title: string;
  description?: string;
  itemLabel: string;
  demo: string;
  repo: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  employmentType: string;
  period: string;
  location: string;
  mode: string;
  tech: string[];
  note?: string;
  bullets: string[];
}

export interface ExperienceSectionContent {
  eyebrow: string;
  title: string;
  description?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  status: string;
  badge: string;
}

export interface CredentialsContent {
  title: string;
  educationTitle: string;
  education: EducationItem[];
}

export interface ContactContent {
  eyebrow: string;
  titleLineOne: string;
  titleLineTwo: string;
  description: string;
  contactButton: string;
  whatsappButton: string;
  github: string;
  name: string;
  email: string;
  message: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submitting: string;
  submit: string;
  sendError: string;
  connectionError: string;
  genericError: string;
}

export interface SiteContent {
  profile: ProfileContent;
  languageSwitcher: LanguageSwitcherContent;
  hero: HeroContent;
  about: AboutContent;
  stacks: StacksContent;
  projectsSection: ProjectsSectionContent;
  projects: ProjectItem[];
  experienceSection: ExperienceSectionContent;
  experience: ExperienceItem[];
  credentialsSection?: CredentialsContent;
  contact: ContactContent;
}

export type SupportedLanguage = "pt" | "en";
