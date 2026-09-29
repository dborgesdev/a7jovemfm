# AGENTS.md

Leia integralmente `docs/project.md` antes de alterar ou criar código.

## Regras deste repositório

- Implemente a A7 Jovem FM conforme `docs/project.md` e a direção visual aprovada.
- Para decisões de produto, conteúdo, UX, assets, SEO e estrutura, `docs/project.md` é a fonte de verdade.
- Não invente fatos, contatos, programação, artistas, gêneros, links de app ou metadados de música.
- Os URLs atuais de stream/player são provisórios; centralize-os em configuração única para futura substituição.
- Não faça autoplay de áudio. A reprodução deve começar por ação explícita do usuário.
- Preserve a predominância de superfícies claras. Não transforme o site em tema escuro.
- Use os assets reais fornecidos e os assets gerados para os slots definidos. Não use placeholders quando houver asset adequado.
- Não redesenhe o logo.
- Mantenha arquitetura simples e proporcional a uma landing page institucional.
- Componentize por responsabilidade/reuso real; evite abstração prematura.
- Não adicione dependências sem necessidade concreta.
- Responsividade, acessibilidade, SEO técnico e performance básica fazem parte da V1.
- Respeite keyboard/focus, semântica, contraste e prefers-reduced-motion.
- Não desenvolva mudanças significativas diretamente na `main`.

## Fluxo da V1

1. Sincronize `main`.
2. Crie uma única branch de implementação.
3. Implemente a V1 completa, navegável e responsiva.
4. Integre conteúdo, player, assets, SEO e estados responsivos no mesmo ciclo.
5. Execute as validações disponíveis no projeto: typecheck, lint, build e testes relevantes.
6. Não faça merge sem aprovação.
7. No primeiro checkpoint, entregue o site pronto para preview e reporte apenas:
   - o que foi implementado;
   - pendências reais;
   - validações executadas e seus resultados.

## Proteções

- Não alterar copy definida em `docs/project.md` por preferência estilística.
- Não substituir assets aprovados arbitrariamente.
- Não criar dados fictícios para preencher espaço.
- Não esconder erros de TypeScript/ESLint com `any`, `@ts-ignore`, `!important` ou hacks sem causa técnica justificada.
- Não criar PRs intermediários de fundação/layout/assets sem necessidade real.
