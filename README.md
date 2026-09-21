# Yure Fernandes - Portfólio Profissional

Portfólio full stack desenvolvido para apresentar experiências, formação, competências técnicas, projetos e canais de contato de Yure Fernandes.

## Destaques

- Interface responsiva em React e TypeScript.
- Conteúdo em português e inglês.
- Tema claro e escuro com preferência persistida no navegador.
- Formulário de contato com validação e envio de e-mail.
- API Express para desenvolvimento local e funções serverless na Vercel.

## Tecnologias

| Camada | Tecnologias |
| --- | --- |
| Frontend | React, TypeScript, Vite, Tailwind CSS e CSS customizado |
| Backend | Node.js, Express e Nodemailer |
| Deploy | Vercel |

## Estrutura

```text
api/        # Funções serverless da Vercel
client/     # Aplicação React/Vite
server/     # API Express para desenvolvimento local
```

## Executando localmente

Pré-requisitos: Node.js 18+ e npm 9+.

```bash
npm install
npm --prefix client install
npm --prefix server install
```

Inicie o frontend e a API em terminais separados:

```bash
# Frontend: http://localhost:5173
npm --prefix client run dev
```

```bash
# API: http://localhost:3001
npm --prefix server run dev
```

## Variáveis de ambiente

Crie `server/.env` para configurar o envio de e-mail:

```env
PORT=3001
EMAIL_HOST=smtp.exemplo.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=seu-usuario
EMAIL_PASS=sua-senha-ou-token
EMAIL_FROM=seuemail@exemplo.com
EMAIL_TO=destinatario@exemplo.com
```

No deploy, configure as mesmas variáveis no painel da Vercel. Não versione arquivos `.env`.

## Validação

```bash
npm --prefix client run typecheck
npm --prefix client run build
```

## API

| Método | Rota | Descrição |
| --- | --- | --- |
| `POST` | `/api/contact` | Processa a mensagem enviada pelo formulário. |
| `GET` | `/api/health` | Verifica a disponibilidade da API. |

## Contato

- [LinkedIn](https://www.linkedin.com/in/yurefernandes/)
- [GitHub](https://github.com/Yur3e)
- [E-mail](mailto:joseyure.sfernandes@gmail.com)
