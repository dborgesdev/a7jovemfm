# Validação da V1 — 29/09/2026

Branch: `feat/v1-site`. Preview: http://127.0.0.1:4174.

## Executado

- `node scripts/check.mjs`: aprovado. Sintaxe dos módulos, arquivos de assets, âncoras, IDs únicos e H1.
- `node --test`: 3 testes aprovados (sem autoplay, play/pausa/volume, falha e nova tentativa, cancelamento de conexão).
- `node scripts/build.mjs`: aprovado; saída em `dist/`.
- `git diff --check`: sem erros.
- Typecheck: não aplicável; JavaScript nativo sem TypeScript.
- Browser: revisão visual completa em 375, 768, 1024 e 1440px, sem overflow horizontal.
- Imagens: todas carregadas; nenhum arquivo ausente.
- Console: sem erros ou avisos na sessão de verificação.
- Stream provisório: reprodução real confirmada pelo estado `playing` do áudio; pausa validada.
- Menu mobile: abrir, fechar por Escape e retornar foco ao botão.
- CTA principal: inicia áudio, rola para o player e transfere foco ao controle.
- Destinos externos: conferidos na DOM, com nova aba e proteção `noopener noreferrer`.

## Limites e pendências

- Substituir stream e player/app provisórios antes da publicação.
- Links de lojas ainda não confirmados; a V1 utiliza CTA neutro.
- Validação realizada no navegador integrado Chromium; Safari/iOS e Firefox não testados.
- Estado de falha e cancelamento validado nos testes unitários; não houve falha real do servidor durante o teste de reprodução.
- Os assets originais foram preservados. Recortes CSS escondem os resíduos existentes na margem esquerda do Hero.

## Refinamento visual — rodada 1

- Mesma branch `feat/v1-site`; `docs/project.md` e assets originais preservados.
- Header e footer com logos maiores; créditos e link Smart Local conforme solicitação.
- Hero próximo de 80svh no desktop, headline ampliada e transição diagonal sem névoa.
- Player vertical, controles maiores e metadados reais.
- Posicionamento ampliado e seis imagens em galeria diagonal com expansão por hover/foco; mobile com scroll snap.
- Experiência e App em seções próprias, com maior escala e mockup dominante.
- CTA final ampliado como encerramento de campanha.
- Lint estático, build e seis testes aprovados. Typecheck não disponível nesta stack JavaScript.
- Revisão visual em 375, 768, 1024 e 1440px; sem overflow horizontal da página.
- Todas as imagens carregadas, navegação interna e crédito externo conferidos; console sem erros/avisos.
- Menu mobile/Escape, reprodução real, pausa e atualização real de faixa validados.
- Galeria: expansão por foco confirmada (painel focado 519px versus 200px nos demais a 1440px); acesso ao último painel por Tab no mobile confirmado.
- Reduced motion preservado em CSS; não foi realizada emulação da preferência do sistema.
- Preview desta rodada: http://127.0.0.1:4175.

### Metadados

Referência real inspecionada no checkout local de `dborgesdev/geracaovinilfm`: `PlayerProvider.tsx` e `getStats.ts`. Consulta no servidor ao endpoint configurado, timeout de 6s, cache de 10s, atualização periódica no cliente e cancelamento ao sair da página. Respostas offline, inválidas e falhas usam fallback neutro e não conservam título antigo.

A publicação precisa de Node ou função equivalente para `/api/now-playing`; hospedagem apenas estática não oferece a consulta por causa de CORS no upstream. Os endpoints continuam provisórios e pertencem a outra rádio.

### Limitações visuais dos arquivos

Os assets em `public/images/moments` já contêm diagonais e cortes parciais de rostos/corpos. Foram utilizados sem alteração ou substituição. Safari/iOS e Firefox não foram testados.
