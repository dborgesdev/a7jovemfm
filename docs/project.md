# A7 Jovem FM — Projeto do Site

## Status
- Projeto simples / Nível A.
- Repositório: https://github.com/dborgesdev/a7jovemfm
- V1 deve ser entregue completa, navegável, responsiva e visualmente fiel à arte conceitual aprovada.
- A arte conceitual aprovada neste projeto é referência visual obrigatória de composição, hierarquia, ritmo, uso de vermelho/branco/preto, blocos, player e proporções gerais.
- Não tratar a referência como mockup pixel-perfect absoluto; preservar porém todos os elementos e a estrutura definidos.

## Empresa e fatos confirmados
- Nome: A7 Jovem FM.
- Segmento: rádio online.
- Slogan: “A número 1 em música”.
- Funcionamento: 24 horas no ar.
- Diferencial declarado: qualidade de som em alta definição.
- Identidade solicitada: vermelho, preto e branco, com possibilidade de apoio de tons neutros.
- Direção solicitada: jovem, atual, luminosa; não usar o site predominantemente escuro.
- Instagram confirmado: https://www.instagram.com/a7jovemfmoficial
- URL pretendida: https://www.a7jovemfm.com
- Não há autorização para associar a rádio a artistas, álbuns, gêneros ou estilos musicais específicos.

## Objetivo
Criar uma landing page institucional de rádio com foco em:
1. reforço da marca A7 Jovem FM;
2. audição ao vivo;
3. promoção do app/player;
4. percepção de energia, juventude e qualidade sem restringir a identidade musical a um gênero específico.

## Público e jornada
Hipótese estratégica de trabalho, não fato público: público amplo com afinidade por uma linguagem contemporânea, dinâmica e digital.

Jornada principal:
- reconhecer a marca;
- entender que a rádio está ao vivo 24h;
- iniciar a reprodução;
- conhecer o posicionamento;
- acessar o app/player;
- seguir a rádio no Instagram.

## Conversão principal
CTA primário: ouvir a rádio ao vivo.

CTA secundário: abrir/baixar o app/player.

## Streaming e app — dados provisórios
Usar provisoriamente:
- Stream: https://s03.svrdedicado.org:7416/stream
- Player/App: https://player.svrdedicado.org/player-app-multi-plataforma/7416

Esses links pertencem a outra rádio do mesmo cliente e existem somente para desenvolvimento da V1.

### Regra de implementação
- Centralizar os endpoints em um arquivo/configuração única.
- Não espalhar URLs de stream/player pelos componentes.
- Marcar claramente no código como dados provisórios a substituir antes da publicação.
- O player visual deve pertencer ao design do site; não usar o visual da página externa como interface principal.
- Se o endpoint não fornecer metadados confiáveis de faixa/artista/capa, não inventar nem simular esse conteúdo.

## Sitemap / estrutura
Página única com navegação por âncoras:
- Início
- A Rádio
- App
- Ao Vivo

Estrutura:
1. Header
2. Hero
3. Player / Ao vivo
4. Posicionamento / benefícios
5. Seção experiencial
6. App
7. CTA final
8. Footer

## Conteúdo final por seção

### Header
Logo A7 Jovem FM.

Navegação:
- Início
- A Rádio
- App
- Ao Vivo

CTA:
- OUÇA AGORA

Ícone/link social:
- Instagram

Comportamento:
- layout claro;
- pode iniciar sobre o hero e ganhar fundo sólido no scroll;
- mobile com menu compacto acessível.

### Hero
Eyebrow:
**AO VIVO • 24 HORAS**

H1:
**A número 1 em música.**

Texto de apoio:
**Música para acompanhar o seu ritmo, a qualquer hora. A7 Jovem FM, 24 horas no ar com som em alta definição.**

CTA primário:
**OUVIR AO VIVO**

CTA secundário:
**BAIXAR O APP**

Direção:
- seguir de perto a arte conceitual aprovada;
- predominância clara;
- vermelho forte na tipografia e nos elementos geométricos;
- fotografia jovem e luminosa;
- elemento gráfico “7” ou geometria derivada da marca em grande escala;
- não escurecer a foto com overlay pesado.

### Player / Ao vivo
Eyebrow:
**A7 JOVEM FM • AO VIVO**

Heading:
**Aperte o play.  
O resto é com a gente.**

Player:
- play/pause;
- estado visual de reprodução;
- volume quando tecnicamente adequado;
- identificação “A7 Jovem FM”;
- indicador “Ao vivo”;
- botão para abrir o app/player externo.

CTA:
**ABRIR NO APP**

Direção:
- faixa horizontal vermelha de alto impacto;
- pode ser a principal ruptura escura/forte da página;
- incorporar waveform/linhas de áudio apenas como recurso visual secundário;
- preservar legibilidade.

### Posicionamento
Eyebrow:
**SEMPRE COM VOCÊ**

Heading:
**Música para todos  
os seus momentos.**

Texto:
**Em casa, no trabalho, no caminho ou onde você estiver. A A7 Jovem FM fica no ar 24 horas para fazer parte do seu dia.**

Indicadores:
- **24H** — NO AR
- **HD** — SOM EM ALTA DEFINIÇÃO
- **A7** — A NÚMERO 1 EM MÚSICA

Direção:
- fundo branco/off-white;
- composição editorial, não uma grade genérica de cards;
- integrar imagem e indicadores em uma única composição;
- preservar grandes áreas claras.

### Seção experiencial
Heading:
**Tem música que combina  
com o momento.  
E tem música que  
muda o momento.**

Texto:
**Dê o play e deixe a A7 Jovem FM acompanhar você.**

CTA:
**OUVIR AGORA**

Direção:
- fotografia conceitual de ouvinte em situação cotidiana;
- clara, vibrante, natural;
- não mostrar artista, show, capa de álbum ou gênero musical específico;
- não apresentar a imagem como registro real da rádio.

### App
Eyebrow:
**A7 NO SEU CELULAR**

Heading:
**Sua rádio vai  
com você.**

Texto:
**Leve a A7 Jovem FM no bolso e ouça a programação onde estiver.**

CTA principal da V1:
- abrir o player/app provisório fornecido.

Importante:
- não exibir selo Google Play ou App Store como link funcional sem confirmação de URL real;
- se os selos forem usados apenas como parte da composição visual da V1, devem ficar claramente desacoplados de alegação de disponibilidade real, ou preferencialmente substituídos por um CTA neutro “ABRIR O APP” até os links oficiais existirem.

Direção:
- fundo claro;
- mockup de smartphone;
- tela do aparelho com marca A7 Jovem FM;
- formas vermelhas derivadas do símbolo.

### CTA final
Heading:
**Seu momento.  
Sua música. Sua A7.**

Apoio:
**24 HORAS NO AR.**

CTA:
**OUVIR A A7 JOVEM FM**

Direção:
- faixa vermelha de encerramento;
- alto impacto, porém sem transformar o site inteiro em experiência escura;
- símbolo/outline A7 pode entrar como elemento de fundo.

### Footer
Logo A7 Jovem FM.

Links:
- Início
- Ouça ao vivo
- App
- Instagram

Texto:
**© 2026 A7 Jovem FM. Todos os direitos reservados.**

Crédito:
**Desenvolvido por dborges.dev**

Link do Instagram:
https://www.instagram.com/a7jovemfmoficial

## CTAs e destinos
- OUVIR AO VIVO → iniciar/reproduzir stream no player da página e rolar/focar o player quando necessário.
- OUÇA AGORA → mesmo comportamento do CTA principal.
- OUVIR AGORA → mesmo comportamento do CTA principal.
- OUVIR A A7 JOVEM FM → mesmo comportamento do CTA principal.
- BAIXAR O APP / ABRIR NO APP / ABRIR O APP → abrir https://player.svrdedicado.org/player-app-multi-plataforma/7416 em nova aba durante a V1.
- Instagram → https://www.instagram.com/a7jovemfmoficial

## Direção visual
A arte conceitual aprovada deve ser seguida rigorosamente nos elementos propostos e estrutura.

### Atmosfera
- jovem;
- energética;
- atual;
- clara;
- editorial/digital;
- limpa;
- vibrante.

### Regras principais
- site como um todo NÃO pode ser escuro;
- branco/off-white deve dominar as superfícies;
- vermelho é a principal cor de impacto;
- preto/grafite deve funcionar sobretudo em tipografia, contraste e poucos blocos;
- evitar overlays escuros pesados sobre fotografias;
- evitar estética de boate, cyberpunk, neon excessivo ou interface predominantemente preta;
- evitar aparência genérica de template de rádio.

### Assinatura gráfica
- formas geométricas inspiradas no símbolo A7;
- diagonais, recortes e “7” monumental podem aparecer como composição;
- waveform/linhas de áudio em uso controlado;
- tipografia forte, larga e de alto impacto;
- hierarquia tipográfica semelhante à arte aprovada;
- bastante contraste entre blocos de alto impacto e respiro branco.

## Design system inicial
### Cores
Extrair a tonalidade principal do logo fornecido quando o asset final estiver disponível.

Tokens iniciais:
- --color-red: vermelho principal A7;
- --color-red-deep: vermelho profundo para contraste;
- --color-white: #FFFFFF;
- --color-off-white: aproximadamente #F7F7F5;
- --color-graphite: aproximadamente #181818;
- --color-gray-soft: aproximadamente #E9E9E9.

Os hex exatos do vermelho devem ser definidos a partir do logo real, não por aproximação visual quando o arquivo estiver disponível.

### Proporção visual
Diretriz aproximada, não regra matemática:
- 65–70% superfícies claras;
- 20–25% vermelho;
- preto/grafite restrito a contraste e tipografia.

### Tipografia
Escolher fonte web moderna, pesada e legível que se aproxime da presença tipográfica da arte aprovada.
- headlines: sans-serif bold/extra-bold;
- corpo: sans-serif limpa;
- não depender de fonte proprietária sem licença/arquivo disponível.

### Componentes previstos
- Header
- MobileNav
- Hero
- LivePlayer
- Stat/Indicator
- ExperienceSection
- AppSection
- FinalCTA
- Footer
- SocialLink
- Button

Componentizar por responsabilidade real, sem abstração excessiva.

## Plano de assets
A V1 deve chegar visualmente completa, sem placeholders genéricos.

### Logo
Usar o logo real fornecido pelo cliente.
- preservar desenho e proporção;
- preparar versão web com transparência/crop adequado se necessário;
- não redesenhar.

### Favicon
Derivar do símbolo A7 reconhecível da marca.
Preparar, conforme stack:
- favicon SVG ou PNG;
- favicon.ico quando útil;
- apple-touch-icon.

### Hero
Gerar imagem individual para o slot.
Características:
- orientação ultrawide/16:9;
- jovem adulto usando fones;
- ambiente urbano claro;
- luz natural;
- energia/movimento;
- tons claros;
- vermelho presente em roupa ou elementos;
- área segura para texto à esquerda;
- sem texto embutido;
- sem logos;
- sem aparência noturna.

### Imagem experiencial
Gerar imagem individual.
Características:
- 4:3 ou 3:2;
- ouvinte jovem;
- situação cotidiana;
- iluminação clara;
- predominância de vermelho/branco/tons naturais;
- atmosfera positiva e espontânea;
- sem referência a gênero/artista.

### App
Não gerar fotografia de “produto real”.
Construir mockup do smartphone no layout com tela proprietária da A7 Jovem FM.
A tela pode usar logo, vermelho e waveform conceitual.

### OG image
Criar composição 1.91:1:
- logo A7 Jovem FM;
- “A número 1 em música”;
- linguagem vermelha/branca;
- sem alegações adicionais.

### Veracidade
Assets gerados são conceituais e não devem ser apresentados como fotos reais de equipe, estúdio, sede, artistas ou eventos da rádio.

## Funcionalidades
- reprodução do stream ao vivo;
- play/pause;
- volume quando adequado;
- navegação por âncora;
- link para player/app externo;
- link Instagram;
- header responsivo;
- mobile navigation;
- estados de foco/hover;
- reduced motion;
- tratamento de erro de reprodução de stream;
- configuração centralizada de URLs.

### Player
Referência técnica: padrão utilizado nas outras rádios do mesmo cliente, especialmente Geração Vinil FM.
Não copiar identidade visual de outro projeto.
Reutilizar somente padrões técnicos que façam sentido.

Considerar restrições de autoplay dos navegadores:
- não tentar iniciar áudio automaticamente;
- reprodução começa por ação explícita do usuário.

## SEO
### Intenção
Marca/navegação e audição:
- A7 Jovem FM
- A7 Jovem
- ouvir A7 Jovem FM
- A7 Jovem FM ao vivo
- rádio A7 Jovem

Não trabalhar gêneros musicais não confirmados.

### Title
**A7 Jovem FM | A número 1 em música**

### Meta description
**Ouça a A7 Jovem FM ao vivo, 24 horas no ar, com som em alta definição. A número 1 em música, onde você estiver.**

### Canonical
https://www.a7jovemfm.com/

### Open Graph / Twitter
- title alinhado ao SEO title;
- description alinhada à meta description;
- OG image proprietária;
- type website.

### Técnicos
Implementar desde a V1:
- charset;
- viewport;
- canonical;
- robots;
- sitemap;
- favicon;
- OG/Twitter;
- semântica correta;
- JSON-LD somente com dados factuais disponíveis.

### JSON-LD
Se utilizado:
- Organization/RadioStation apenas com propriedades verificáveis;
- não inventar endereço, telefone, fundação, frequência FM, localidade ou área atendida.

## Responsividade
Validar pelo menos:
- 375px
- 768px
- 1024px
- 1440px

Regras:
- preservar impacto do hero sem depender de crop ruim;
- no mobile, imagem pode reposicionar abaixo/atrás da copy conforme legibilidade;
- player deve permanecer simples e operável;
- indicadores devem reorganizar sem perder hierarquia;
- app mockup não pode causar overflow;
- nenhum texto essencial embutido em imagem.

## Acessibilidade
- heading hierarchy coerente;
- botões e links semanticamente corretos;
- labels/aria-label para controles do player;
- navegação por teclado;
- foco visível;
- contraste adequado;
- alt text descritivo sem inventar fatos;
- respeitar prefers-reduced-motion;
- não depender apenas de cor para estado;
- controles touch com área adequada.

## Performance
- otimizar imagens para WebP/AVIF quando apropriado;
- srcset/sizes para imagens grandes;
- lazy load fora da dobra;
- preload somente para recurso realmente crítico;
- evitar dependências pesadas para efeitos simples;
- não usar vídeo de background sem necessidade;
- manter player resiliente e simples.

## Restrições
- Não criar páginas/áreas adicionais sem necessidade.
- Não inventar grade de programação.
- Não inventar locutores.
- Não inventar endereço, telefone, WhatsApp ou e-mail.
- Não citar artistas, álbuns ou gêneros.
- Não alegar presença na App Store ou Google Play sem confirmação.
- Não transformar a página em tema escuro.
- Não copiar visualmente os sites anteriores do cliente.
- Não alterar a estrutura visual aprovada sem necessidade técnica real.
- Não usar imagens geradas como prova factual da operação da rádio.

## Pendências bloqueantes
Nenhuma para construção e preview da V1.

## Pendências não bloqueantes
Antes da publicação final:
1. URL definitiva do stream da A7 Jovem FM.
2. URL definitiva do player/app da A7 Jovem FM.
3. Confirmar se existem links oficiais específicos para Google Play/App Store.
4. Confirmar logo final em arquivo adequado para web caso o asset atual não esteja no repositório.
5. Confirmar eventual contato adicional se o cliente quiser exibir um.

## Critérios de aceite
A V1 será considerada pronta para preview quando:
- reproduzir o stream provisório por ação do usuário;
- seguir a estrutura e linguagem da arte conceitual aprovada;
- apresentar Hero, Player, Posicionamento, Experiência, App, CTA final e Footer;
- usar identidade vermelha/branca com predominância clara;
- não houver blocos genéricos/placeholder;
- assets visuais estiverem integrados;
- funcionar corretamente em desktop e mobile;
- navegação e CTAs funcionarem;
- links provisórios estiverem centralizados;
- SEO básico estiver implementado;
- acessibilidade fundamental estiver presente;
- build/lint/typecheck disponíveis no projeto forem executados e reportados;
- não houver fatos inventados.

## Implementação
A implementação deve ser feita em uma única branch de V1.
Não criar PRs separados de fundação/layout/assets.
Após o primeiro render:
1. realizar QA visual;
2. consolidar feedback;
3. refinar na mesma branch;
4. só então concluir QA técnico e PR.
