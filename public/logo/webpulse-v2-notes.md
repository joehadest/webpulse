# WebPulse — proposta de logo v2

Logo criado a partir da identidade visual do site local: preto #030303, branco #fafafa e azul-ciano. O símbolo combina um W com uma ponta ascendente que representa movimento e pulso digital. As letras foram desenhadas como curvas vetoriais; os SVGs não dependem de fontes instaladas.

## Arquivos

- webpulse-v2.svg: logo horizontal com letras brancas, para fundos escuros.
- webpulse-v2.png: a mesma versão com transparência, 2288 × 384 px.
- webpulse-v2-light.svg / webpulse-v2-light.png: letras em #0f172a, para fundos claros.
- webpulse-v2-icon.svg / webpulse-v2-icon.png: símbolo separado; PNG de 1024 × 1024 px.
- webpulse-v2-preview.png: apresentação da proposta sobre o preto do site.
- webpulse-wordmark.svg / webpulse-icon.svg: arquivos usados pelo componente de logo no site.
- webpulse-instagram-1080.png: avatar quadrado de 1080 × 1080 px, com fundo preto e margem para o recorte circular do Instagram.
- webpulse-instagram.svg: versão vetorial do avatar.
- favicon-16x16.png / favicon-32x32.png / favicon-48x48.png: símbolos para tamanhos pequenos.

O favicon do site está em app/favicon.ico (16, 32 e 48 px). app/icon.svg, app/icon.png e app/apple-icon.png usam o mesmo símbolo. Os ícones de instalação estão em public/web-app-manifest-192x192.png e public/web-app-manifest-512x512.png, com margem própria para máscaras.

Prefira SVG no site. Preserve as proporções e mantenha uma margem ao redor do logo. Use o símbolo separado em espaços pequenos.

## Processo

Exploração com a ferramenta integrada image_gen, usando o prompt salvo em webpulse-v2-prompt.txt. A ferramenta apresentou artefatos nas bordas e na transparência, inclusive após o refinamento abaixo. A arte final foi desenhada diretamente em SVG para acompanhar o sistema vetorial já usado pelo projeto. Os PNGs foram exportados desses SVGs; as imagens geradas não foram usadas como arquivos finais.

### Prompt de refinamento

Use case: logo-brand / precise-object-edit.
Edit target: the supplied WebPulse logo. Preserve the cyan angular W symbol at left, the single horizontal layout, the exact uppercase word "WEBPULSE", and white wide geometric type.
Critical correction: redraw every letter as a perfectly solid filled flat white geometric vector-like shape. Remove ALL speckles, splatters, scratches, jagged edges, black outlines, damaged alpha, rough texture, tiny detached dots, distressed effects, holes inside the solid letter strokes, and artifacts between letters. Clean, flawless typography with crisp smooth antialiased edges and only the intentional inner counters in B and P. No decoration. Keep the W cyan gradient clean and simple, no grain or outlines. Increase the gap between the icon and text slightly. Give safe transparent margins so no letter is cropped. This is a polished professional web development studio logo, not a grunge design. True transparent alpha background, no black backdrop or other background color. One logo only.
