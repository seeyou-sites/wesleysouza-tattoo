# Wesley Souza Tattoo — Site Oficial

Site de portfólio e agendamento para o tatuador autoral **Wesley Souza**, especializado em lettering, preto & cinza, arte geek e geométrico. Desenvolvido com Next.js 15 e React 19.

---

## Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| Next.js | 15.1.0 | Framework React com SSR/SSG |
| React | 19.0.0 | Interface e componentes |
| Tailwind CSS | 4.0.0 | Utilitários base |
| CSS Customizado | — | Toda a estilização visual (`globals.css`) |

---

## Rodando localmente

**Pré-requisitos:** Node.js 18+

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
# → http://localhost:3000

# Build de produção
npm run build
npm start
```

---

## Estrutura do projeto

```
wesley-tattoo-site/
├── app/
│   ├── globals.css      # Todos os estilos (variáveis, componentes, responsividade)
│   ├── layout.jsx       # Layout raiz com metadata e fontes
│   └── page.jsx         # Página principal (composição de seções)
├── components/
│   ├── Hero.jsx         # Seção inicial com chamada para ação
│   ├── Sobre.jsx        # Biografia do artista
│   ├── Styles.jsx       # Apresentação das especialidades
│   ├── Portfolio.jsx    # Galeria com filtros e lightbox
│   ├── Process.jsx      # Etapas do processo de agendamento
│   ├── Testimonials.jsx # Depoimentos de clientes
│   ├── Faq.jsx          # Perguntas frequentes (accordion)
│   ├── Studio.jsx       # Endereço e mapa do estúdio
│   ├── Cta.jsx          # Call-to-action final (WhatsApp)
│   ├── Footer.jsx       # Rodapé com links
│   ├── Nav.jsx          # Navegação fixa com scroll tracking
│   ├── Drawer.jsx       # Menu mobile
│   ├── Fab.jsx          # Botão flutuante WhatsApp
│   ├── Marquee.jsx      # Faixa animada de especialidades
│   ├── QuoteBand.jsx    # Citação inspiradora
│   ├── SchemaOrg.jsx    # Markup JSON-LD para SEO
│   └── TweaksPanel.jsx  # Painel de customização (cores/fontes)
├── context/
│   └── TweaksContext.jsx # Estado global de customização
├── hooks/
│   ├── useReveal.js     # Animações de scroll (IntersectionObserver)
│   └── useSmoothScroll.js # Scroll suave em âncoras internas
└── public/
    └── assets/          # Imagens do portfólio e retratos
```

---

## Design e identidade visual

O site usa uma paleta escura com acentos em ouro, vermelho e osso, configuráveis via painel de tweaks:

| Variável CSS | Valor padrão | Uso |
|---|---|---|
| `--bg` | `#0a0908` | Fundo principal |
| `--bone` | `#e9dfce` | Texto e elementos claros |
| `--gold` | `#c9a86a` | Acentos e destaques |
| `--blood` | `#6b1d14` | Variante de acento vermelho |

Fontes utilizadas (Google Fonts):
- **UnifrakturCook** — títulos blackletter
- **Cormorant Garamond** — corpo de texto e citações
- **JetBrains Mono** — labels e elementos técnicos
- **Pirata One** / **Metamorphous** — variantes decorativas

---

## SEO

- Metadata completa (OpenGraph, Twitter Cards)
- Schema.org JSON-LD `LocalBusiness` em `SchemaOrg.jsx`
- `sitemap.xml` e `robots.txt` em `/public/`

---

## Licença

© Wesley Souza Tattoo — Todos os direitos reservados.

Este projeto é propriedade exclusiva de **Wesley Souza Tattoo**. O código-fonte, design, imagens e demais ativos são de uso privado e não podem ser reproduzidos, distribuídos ou utilizados sem autorização expressa do proprietário.
