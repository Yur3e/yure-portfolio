import { SiteContent, SupportedLanguage } from "../types/portfolio";

export const siteContent: Record<SupportedLanguage, SiteContent> = {
  pt: {
    profile: {
      name: "José Yure da Silva Fernandes",
      title: "Desenvolvedor de Software | ADS & Ciência de Dados",
      subtitle:
        "Graduado em Análise e Desenvolvimento de Sistemas (UNIESP) e Ciência de Dados (UEPB). Experiência em backend, APIs REST, C#, .NET, Python, SQL e arquitetura limpa.",
      location: "João Pessoa, PB, Brasil",
      phone: "(83) 98692-5046",
      whatsappUrl: "https://wa.me/5583986925046",
      email: "joseyure.sfernandes@gmail.com",
      linkedin: "https://www.linkedin.com/in/yurefernandes/",
      github: "https://github.com/Yur3e",
    },
    languageSwitcher: {
      pt: "Português",
      en: "English"
    },
    hero: {
      available: "Disponível para novas oportunidades",
      titleLineOne: "Yure",
      titleLineTwo: "Fernandes",
      lead:
        "Graduado em Análise e Desenvolvimento de Sistemas e Ciência de Dados. Atuo na construção e manutenção de sistemas web, APIs REST e soluções orientadas a dados com C#, .NET, Python, SQL e foco em Clean Code.",
      projectsButton: "Ver Projetos",
      experienceButton: "Trajetória"
    },
    about: {
      eyebrow: "Sobre mim",
      title: "Sobre mim",
      paragraphs: [
        "Sou graduado em Análise e Desenvolvimento de Sistemas pelo UNIESP e em Ciência de Dados pela Universidade Estadual da Paraíba (UEPB). Minha formação une engenharia de software, dados e visão de negócio."
      ]
    },
    stacks: {
      eyebrow: "Tecnologias",
      title: "Competências Técnicas",
      groups: [
        {
          id: "backend",
          title: "Backend & Linguagens",
          items: ["C#", ".NET", "Python", "Node.js", "Express", "C++", "Java", "REST APIs", "POO", "MVC"]
        },
        {
          id: "data",
          title: "Dados & Automação",
          items: ["SQL", "SQL Server", "MySQL", "Pandas", "NumPy", "Streamlit", "ETL", "Automação"]
        },
        {
          id: "frontend",
          title: "Frontend & Web",
          items: ["JavaScript", "TypeScript", "React", "Vite", "HTML5", "CSS3", "Bootstrap", "Swagger"]
        },
        {
          id: "tools",
          title: "Ferramentas & Metodologias",
          items: ["Git", "GitHub", "Docker", "Postman", "Linux", "Scrum", "Clean Code", "Generative AI"]
        }
      ]
    },
    projectsSection: {
      eyebrow: "Projetos",
      title: "Projetos Recentes",
      itemLabel: "projeto",
      demo: "Demo",
      repo: "Repositório"
    },
    projects: [
      {
        title: "Portfólio Profissional Full-Stack",
        description:
          "Aplicação web full-stack desenvolvida com React, Vite, Node.js e Express. Conta com rotas de health-check, formulário de contato integrado via Nodemailer, internacionalização bilíngue (PT/EN), temas claro/escuro e arquitetura modular de alta manutenibilidade.",
        tech: ["React", "Vite", "Node.js", "Express", "Nodemailer", "CSS Moderno"],
        demo: "https://portfolio-yurefernandes.vercel.app",
        repo: "https://github.com/Yur3e/portfolio-test"
      },
      {
        title: "Bilhetrometro",
        description:
          "Aplicação analítica orientada a dados para coleta, processamento e visualização interativa de métricas de mobilidade e tarifas. Desenvolvido com Python, Pandas, NumPy, Streamlit e Altair para transformar dados brutos em decisões visuais.",
        tech: ["Python", "Pandas", "NumPy", "Streamlit", "Altair", "Data Analysis"],
        demo: "#",
        repo: "https://github.com/Yur3e/bilhetrometro"
      }
    ],
    experienceSection: {
      eyebrow: "Trajetória",
      title: "Experiência Profissional",
    },
    experience: [
      {
        title: "Monitor Acadêmico – Estruturas de Dados e Algoritmos em C++",
        company: "Universidade Estadual da Paraíba (UEPB)",
        employmentType: "Monitoria Acadêmica",
        period: "mai. de 2026 – o momento",
        location: "João Pessoa, Paraíba, Brasil",
        mode: "Presencial",
        tech: ["C++", "Estruturas de Dados", "Algoritmos", "Ponteiros", "Complexidade"],
        bullets: [
          "Apoio estudantes em lógica de programação, estruturas de dados, algoritmos e resolução de problemas, fortalecendo a comunicação técnica e o raciocínio analítico.",
          "Explico e reforço conceitos de vetores, listas, pilhas, filas, ponteiros, complexidade assintótica e raciocínio algorítmico por meio de exercícios práticos.",
          "Reviso soluções práticas e oriento estudantes no desenvolvimento em C++, traduzindo conceitos técnicos densos em explicações claras e estruturadas.",
          "Fortaleço fundamentos de programação diretamente aplicáveis a backend, APIs, POO e engenharia de software de alta performance."
        ]
      },
      {
        title: "Estagiário de Desenvolvimento de Software",
        company: "SMN Tecnologia da Informação",
        employmentType: "Estágio",
        period: "out. de 2025 – set. de 2026",
        location: "João Pessoa, Paraíba, Brasil",
        mode: "Presencial",
        tech: ["C#", ".NET", "APIs REST", "SQL Server", "Clean Code", "POO", "Git"],
        bullets: [
          "Apoio a manutenção e evolução de sistemas web, APIs REST, regras de negócio e integrações utilizadas por aplicações corporativas internas.",
          "Implemento validações, consultas em banco de dados SQL, correções de bugs, melhorias e novas funcionalidades solicitadas, garantindo confiabilidade e estabilidade.",
          "Utilizo Git e GitHub para controle de versão, organização e rastreabilidade das alterações em fluxo ágil de equipe.",
          "Aplico lógica de programação, POO, Clean Code e resolução de problemas durante o ciclo de desenvolvimento contínuo."
        ]
      },
      {
        title: "Desenvolvedor Full-Stack e APIs",
        company: "Freelance",
        employmentType: "Freelance",
        period: "ago. de 2023 – abr. de 2024",
        location: "João Pessoa, Paraíba, Brasil",
        mode: "Remoto",
        tech: ["Node.js", "Express", "JavaScript", "Python", "Flask", "Django", "SQL", "Bootstrap"],
        bullets: [
          "Desenvolvi aplicações web completas, APIs REST e integrações utilizando Node.js, Express, JavaScript, Python (Flask/Django) e SQL para atender a demandas sob medida.",
          "Implementei rotas, regras de negócio, persistência de dados, consumo de APIs e interfaces responsivas com HTML, CSS e Bootstrap.",
          "Criei automações, relatórios e scripts operacionais para processamento e organização de dados.",
          "Estruturei projetos seguindo o padrão arquitetural MVC, Git/GitHub e boas práticas de desenvolvimento para garantir manutenibilidade."
        ]
      },
      {
        title: "Pesquisador Jr. & Desenvolvimento Mobile",
        company: "Universidade Federal da Paraíba (UFPB)",
        employmentType: "Trainee · PIBIC-EM/CNPq/UFPB",
        period: "ago. de 2019 – fev. de 2020",
        location: "João Pessoa, Paraíba, Brasil",
        mode: "Presencial",
        tech: ["C#", "Unity 3D", "Android", "Gamificação"],
        bullets: [
          "Bolsista do Programa Institucional de Bolsas de Iniciação Científica (PIBIC-EM/CNPq/UFPB).",
          "Desenvolvi uma aplicação educacional em Unity 3D com C#, aplicando princípios de serious games e gamificação.",
          "Gerei builds Android (APK) utilizando o Unity Android Build Support."
        ]
      }
    ],
    credentialsSection: {
      title: "Formação Acadêmica",
      educationTitle: "Formação Superior",
      education: [
        {
          degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
          institution: "UNIESP",
          status: "Graduado (Fev/2022 – Jun/2024)",
          badge: "Concluído"
        },
        {
          degree: "Tecnólogo em Ciência de Dados",
          institution: "Universidade Estadual da Paraíba (UEPB - Campus V)",
          status: "Concluído (Ago/2024 – Ago/2026)",
          badge: "Concluído"
        }
      ]
    },
    contact: {
      eyebrow: "Contato",
      titleLineOne: "Vamos",
      titleLineTwo: "construir juntos?",
      description:
        "Estou disponível para novas oportunidades em desenvolvimento de software e dados. Vamos trocar uma ideia sobre como posso agregar ao seu time?",
      contactButton: "Enviar e-mail direto",
      whatsappButton: "Chamar no WhatsApp",
      github: "GitHub",
      name: "Nome",
      email: "E-mail",
      message: "Mensagem",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "seuemail@exemplo.com",
      messagePlaceholder: "Digite sua mensagem...",
      submitting: "Enviando...",
      submit: "Enviar mensagem",
      sendError: "Não foi possível enviar a mensagem.",
      connectionError:
        "Não foi possível conectar ao servidor. Você também pode me contatar diretamente por e-mail ou WhatsApp.",
      genericError: "Erro ao enviar a mensagem."
    }
  },
  en: {
    profile: {
      name: "José Yure da Silva Fernandes",
      title: "Software Developer | Systems Analysis & Data Science",
      subtitle:
        "Graduated in Systems Analysis & Development (UNIESP) and Data Science (UEPB). Hands-on experience in backend development, REST APIs, C#, .NET, Python, SQL, and clean architecture.",
      location: "João Pessoa, PB, Brazil",
      phone: "+55 (83) 98692-5046",
      whatsappUrl: "https://wa.me/5583986925046",
      email: "joseyure.sfernandes@gmail.com",
      linkedin: "https://www.linkedin.com/in/yurefernandes/",
      github: "https://github.com/Yur3e",
    },
    languageSwitcher: {
      pt: "Português",
      en: "English"
    },
    hero: {
      available: "Open to new opportunities",
      titleLineOne: "Yure",
      titleLineTwo: "Fernandes",
      lead:
        "Graduated in Systems Analysis and Development and Data Science. I build and maintain web systems, REST APIs, and data-driven solutions using C#, .NET, Python, SQL, and Clean Code principles.",
      projectsButton: "View Projects",
      experienceButton: "Career Path"
    },
    about: {
      eyebrow: "About me",
      title: "Profile & Foundations",
      paragraphs: [
        "I graduated in Systems Analysis and Development from UNIESP and Data Science from the State University of Paraíba (UEPB). My background connects software engineering, data, and business perspective."
      ]
    },
    stacks: {
      eyebrow: "Technologies",
      title: "Technical Skills",
      groups: [
        {
          id: "backend",
          title: "Backend & Languages",
          items: ["C#", ".NET", "Python", "Node.js", "Express", "C++", "Java", "REST APIs", "OOP", "MVC"]
        },
        {
          id: "data",
          title: "Data & Automation",
          items: ["SQL", "SQL Server", "MySQL", "Pandas", "NumPy", "Streamlit", "ETL", "Automation"]
        },
        {
          id: "frontend",
          title: "Frontend & Web",
          items: ["JavaScript", "TypeScript", "React", "Vite", "HTML5", "CSS3", "Bootstrap", "Swagger"]
        },
        {
          id: "tools",
          title: "Tools & Methods",
          items: ["Git", "GitHub", "Docker", "Postman", "Linux", "Scrum", "Clean Code", "Generative AI"]
        }
      ]
    },
    projectsSection: {
      eyebrow: "Projects",
      title: "Recent Projects",
      itemLabel: "project",
      demo: "Demo",
      repo: "Repository"
    },
    projects: [
      {
        title: "Full-Stack Professional Portfolio",
        description:
          "Full-stack web application built with React, Vite, Node.js, and Express. Includes health-check endpoints, Nodemailer-powered contact forms, bilingual i18n (PT/EN), dark/light themes, and a maintainable modular architecture.",
        tech: ["React", "Vite", "Node.js", "Express", "Nodemailer", "Modern CSS"],
        demo: "https://portfolio-yurefernandes.vercel.app",
        repo: "https://github.com/Yur3e/portfolio-test"
      },
      {
        title: "Bilhetrometro",
        description:
          "A data-oriented analytics application designed to collect, process, and interactively visualize transit and fare metrics using Python, Pandas, NumPy, Streamlit, and Altair to turn raw numbers into clear actionable insights.",
        tech: ["Python", "Pandas", "NumPy", "Streamlit", "Altair", "Data Analysis"],
        demo: "#",
        repo: "https://github.com/Yur3e/bilhetrometro"
      }
    ],
    experienceSection: {
      eyebrow: "Career Path",
      title: "Professional Experience",
    },
    experience: [
      {
        title: "Teaching Assistant – Data Structures & Algorithms in C++",
        company: "State University of Paraíba (UEPB)",
        employmentType: "Academic Mentorship",
        period: "May 2026 – Present",
        location: "João Pessoa, Paraíba, Brazil",
        mode: "On-site",
        tech: ["C++", "Data Structures", "Algorithms", "Pointers", "Complexity"],
        bullets: [
          "Mentoring undergraduate students in programming logic, data structures, algorithms, and technical problem-solving.",
          "Explaining and reinforcing vectors, linked lists, stacks, queues, pointers, asymptotic complexity, and algorithmic efficiency through practical problems.",
          "Reviewing code and guiding students in C++, turning dense technical concepts into structured, clean explanations.",
          "Strengthening foundational computing skills applicable to backend systems, APIs, OOP, and high-performance software engineering."
        ]
      },
      {
        title: "Software Development Intern",
        company: "SMN Tecnologia da Informação",
        employmentType: "Internship",
        period: "Oct 2025 – Sep 2026",
        location: "João Pessoa, Paraíba, Brazil",
        mode: "On-site",
        tech: ["C#", ".NET", "REST APIs", "SQL Server", "Clean Code", "OOP", "Git"],
        bullets: [
          "Supporting development and maintenance of enterprise web systems, REST APIs, business rules, and internal integrations.",
          "Implementing validations, relational SQL queries, bug fixes, and feature enhancements to guarantee system reliability.",
          "Using Git and GitHub for version control, code collaboration, and traceable changes within an agile team workflow.",
          "Applying programming logic, OOP, Clean Code, and structured problem-solving throughout the development lifecycle."
        ]
      },
      {
        title: "Full-Stack & APIs Developer",
        company: "Freelance",
        employmentType: "Freelance",
        period: "Aug 2023 – Apr 2024",
        location: "João Pessoa, Paraíba, Brazil",
        mode: "Remote",
        tech: ["Node.js", "Express", "JavaScript", "Python", "Flask", "Django", "SQL", "Bootstrap"],
        bullets: [
          "Delivered tailored web applications, REST APIs, and integrations utilizing Node.js, Express, JavaScript, Python (Flask/Django), and SQL.",
          "Implemented routes, business logic, data persistence, API consumption, and responsive interfaces with HTML, CSS, and Bootstrap.",
          "Engineered automation scripts and operational reports to streamline data handling and operations.",
          "Structured projects following MVC architectural patterns and Git/GitHub best practices to ensure high maintainability."
        ]
      },
      {
        title: "Junior Researcher & Mobile Development",
        company: "Federal University of Paraíba (UFPB)",
        employmentType: "Trainee · PIBIC-EM/CNPq/UFPB",
        period: "Aug 2019 – Feb 2020",
        location: "João Pessoa, Paraíba, Brazil",
        mode: "On-site",
        tech: ["C#", "Unity 3D", "Android", "Gamification"],
        bullets: [
          "Research scholarship recipient in UFPB's Institutional Scientific Initiation Scholarship Program (PIBIC-EM/CNPq).",
          "Built an educational Unity 3D application with C#, applying serious games and gamification principles.",
          "Generated Android APK builds with Unity Android Build Support."
        ]
      }
    ],
    credentialsSection: {
      title: "Education",
      educationTitle: "Higher Education",
      education: [
        {
          degree: "A.S. in Systems Analysis and Development",
          institution: "UNIESP",
          status: "Graduated (Feb 2022 – Jun 2024)",
          badge: "Completed"
        },
        {
          degree: "B.S. in Data Science",
          institution: "State University of Paraíba (UEPB - Campus V)",
          status: "Completed (Aug 2024 – Aug 2026)",
          badge: "Completed"
        }
      ]
    },
    contact: {
      eyebrow: "Contact",
      titleLineOne: "Let's",
      titleLineTwo: "build together.",
      description:
        "I am open to software development and data engineering opportunities. Let's discuss how my technical background can bring value to your team.",
      contactButton: "Direct Email",
      whatsappButton: "Chat on WhatsApp",
      github: "GitHub",
      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@example.com",
      messagePlaceholder: "Type your message...",
      submitting: "Sending...",
      submit: "Send message",
      sendError: "Could not send the message.",
      connectionError:
        "Could not connect to the server. You can also contact me directly via email or WhatsApp.",
      genericError: "Error sending the message."
    }
  }
};
