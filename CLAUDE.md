# CLAUDE.md — Wesley Tattoo Site

## Comandos do Projeto
```bash
npm run dev      # servidor local em http://localhost:3000
npm run build    # build de produção
npm run lint     # verificar erros de linting
```

## Stack
- Next.js 15 · React 19 · Tailwind CSS 4
- CSS customizado em `app/globals.css` (sem Tailwind utility classes diretas)
- Fontes via Google Fonts (UnifrakturCook, Cormorant Garamond, JetBrains Mono, Pirata One, Metamorphous)

## Convenções de Código
- Um componente por seção, em `/components/`
- CSS centralizado em `app/globals.css` com variáveis: `--gold`, `--bone`, `--blood`, `--bg`
- Imagens em `/public/assets/` — nunca em `/assets/` (Next.js serve a partir de `/public/`)
- Componentes são React client components (`'use client'` quando usam estado/hooks)

## Pegadinhas Conhecidas
- `TweaksContext` controla `accent`, `font`, `hero` e `wppUrl` globalmente — não hardcodar cores inline nos componentes
- Fontes decorativas são trocadas via `data-font` no `<body>` (ver `globals.css`), nunca pelo componente
- O `SchemaOrg.jsx` tem o JSON-LD de SEO — atualizar junto quando textos de endereço/telefone mudarem
- Git status mostra arquivos em `assets/` como deletados (D) — o caminho correto é `public/assets/`

## Estrutura de Pastas
```
app/            → layout.jsx, page.jsx, globals.css
components/     → um .jsx por seção da página
context/        → TweaksContext (estado global de customização)
hooks/          → useReveal.js, useSmoothScroll.js
public/assets/  → imagens do portfólio e retratos
```
