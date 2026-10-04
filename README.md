# Voos App

Projeto 1 da disciplina Programação Web Fullstack (UTFPR). SPA desenvolvida com React.js que consome a API AviationStack para buscar voos comerciais, ver o detalhe de um voo e consultar aeroportos.

## Tecnologias

- React.js + Vite (SPA, requisições AJAX com `fetch`)
- API: [AviationStack](https://apilayer.com/products/aviationstack/)
- Hook do React: `useReducer`, que controla o estado da busca de voos (carregando, sucesso e erro)
- Biblioteca externa: React Router, para as rotas e a navegação sem recarregar a página

## Como executar

```bash
git clone https://github.com/Arthur-Stellato/ProjectOneFullStack-2026-02.git
cd ProjectOneFullStack-2026-02/ProjectOne
npm install
cp .env.example .env   # adicione sua chave da AviationStack
npm run dev
```

Variável de ambiente necessária:

```env
VITE_AVIATIONSTACK_KEY=sua_chave_aqui
```

O arquivo `.env` não vai para o repositório.

## Telas

| Rota | Tela |
| --- | --- |
| `/` | Início: resumo dos voos ativos e atalhos |
| `/voos` | Busca de voos por código (ex.: LA3456) |
| `/voo/:id` | Detalhe de um voo: horários, atraso, terminal e portão |
| `/aeroportos` | Lista paginada de aeroportos, com filtro por nome, IATA, ICAO ou fuso horário |

## Limitações da API

O plano gratuito da AviationStack permite 100 requisições por mês e não oferece o endpoint `/airports`. Por isso a lista de aeroportos é montada a partir dos voos das companhias Azul, GOL e LATAM retornados por `/flights` (uma chamada por companhia), sem repetidos. Esse endpoint não informa o país, então o filtro busca por nome, IATA, ICAO ou fuso horário (ex.: `America/Sao_Paulo`), e a lista é paginada no navegador, 10 aeroportos por página.

## Equipe

| Integrante | GitHub | Responsabilidade |
| --- | --- | --- |
| Arthur | [@Yakino41](https://github.com/Yakino41) | Tela de Aeroportos (rota `/aeroportos`, pasta `src/features/aeroportos/`): monta a lista de aeroportos a partir de `/flights`, remove os repetidos, filtra por nome ou IATA e trata os estados de carregamento, erro e lista vazia. |
| Conrado | [@conrah](https://github.com/conrah) | Busca de voos (rota `/voos`, pasta `src/features/voos/`): formulário de busca por código do voo, `useReducer` para controlar o estado da busca e lista de resultados com link para o detalhe. |
| João Felipe | [@jooaaao35](https://github.com/jooaaao35) | Início, detalhe do voo e layout (rotas `/` e `/voo/:id`, pastas `src/features/home/`, `src/features/detalhes/` e `src/components/layout/`): resumo de voos ativos, tela de detalhe, cabeçalho, menu e rodapé. |

## Uso de IA e ferramentas de apoio

Cada integrante registra aqui o que usou e para quê.

| Ferramenta | Integrante | Para quê |
| --- | --- | --- |
| Claude (Anthropic) | Arthur | Esqueleto inicial do projeto (estrutura de pastas, rotas e componentes compartilhados de carregamento, erro e lista vazia) e guia de divisão do trabalho em três partes. |
| Claude (Anthropic) | Arthur | Orientação passo a passo na tela de Aeroportos: explicação de conceitos (props, estado, `useEffect`, input controlado), sugestões de código e ajuda para corrigir erros. |
| Claude (Anthropic) | Arthur | Revisão do código da equipe (lista de bugs e melhorias) e rascunho deste README. |
| Claude (Anthropic) | João Felipe | Desenvolvimento do código da minha parte (início, detalhe do voo, layout e rotas), com orientação, revisão e correção de erros. |
| Claude (Anthropic) / ChatGPT | Conrado | Auxílio na correção dos componentes da funcionalidade de busca de voos, incluindo BuscaVoos.jsx e ListaVoos.jsx. Também foi utilizado para esclarecer dúvidas sobre React, useReducer, integração com a API e git. |
| [Ferramenta] | [Nome] | [Para quê] |
