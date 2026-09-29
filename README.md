# A7 Jovem FM

Landing page com HTML/CSS/JS e uma rota Node para metadados, sem dependências de produção. Requer Node.js 22 ou superior.

- `npm run dev`: preview em http://127.0.0.1:4174
- `npm run lint`: verificação estática de sintaxe, assets e âncoras
- `npm test`: testes de comportamento do player
- `npm run build`: arquivos publicáveis em `dist/`
- `npm run preview`: preview do build

Também é possível executar diretamente `node scripts/serve.mjs`, sem npm.
Não há etapa de typecheck: o projeto usa JavaScript nativo.

## Organização

`index.html` contém as seções semânticas e o SEO, disponíveis antes do JavaScript.
`src/styles.css` centraliza tokens e layouts responsivos.
`src/player.js` controla o áudio; `src/navigation.js` controla o menu.
`src/main.js` integra controles e CTAs.

## Antes de publicar

Substituir os endpoints provisórios de stream, stats e app em `src/config.js`: pertencem a outra rádio do cliente. Confirmar domínio de produção e links oficiais de app; não há alegação de disponibilidade nas lojas.

## Assets

Hero: `hero-a7-jovem.webp`; experiência: `experiencia-momento.webp`;
player: `player-bg.webp`; posicionamento: `section-bg-light.webp`;
app: `app-mockup.webp`; encerramento: `cta-final-bg.webp`.
Logo original WebP no header/rodapé, variante branca no player, símbolo nos indicadores.
PNG vermelho é a referência exata de cor (#EB0C1B).
OG, favicon e Apple Touch Icon usam os arquivos aprovados.
As imagens de ouvintes e app são conceituais.


## Metadados e hospedagem

A referência técnica foi inspecionada em `D:/_dev-projects/geracaovinilfm/src/components/player/PlayerProvider.tsx` e `src/lib/getStats.ts`. O navegador consulta `/api/now-playing` a cada 10 segundos; `scripts/metadata.mjs` consulta `/stats?json=1` no servidor, com timeout e cache curto. Somente `songtitle` válido e stream online são exibidos. Falhas removem o título antigo e mostram fallback neutro.

O upstream não fornece CORS. Portanto, a publicação precisa executar a rota Node ou uma função equivalente no mesmo domínio; hospedagem exclusivamente estática não exibirá metadados. Para servir o build: `node scripts/serve.mjs dist`. A porta pode ser configurada pela variável `PORT`. O preview desta rodada está em http://127.0.0.1:4175.

A galeria utiliza os seis arquivos originais de `public/images/moments`, sem modificá-los. Recortes e rostos parcialmente ausentes já fazem parte desses arquivos.
