# Portfolio - Vue 3 + Vue CLI

Portfolio personale pubblicato su GitHub Pages.

## Setup locale

```bash
npm ci
npm run serve
```

## Script principali

- `npm run serve`: avvia ambiente di sviluppo.
- `npm run build`: genera output di produzione in `dist/`.
- `npm run lint`: esegue lint su `src/` (`.js` e `.vue`).
- `npm run deploy`: pubblica `dist/` su `gh-pages`.

## Deploy

Workflow consigliato:

1. `npm run build`
2. `npm run deploy`

Script helper disponibile: [`deploy.sh`](/home/miche/portfolio/deploy.sh).

## Note tecniche

- `MenuComponent` e listener globali sono gestiti a livello applicazione.
- La gestione skin/tema dinamica e shortcut (`S`, double tap mobile) è centralizzata in `src/utils/skinController.js`.
- Le 12 coppie font sono self-hosted in `public/fonts` con preload in `public/index.html` e warmup runtime via `document.fonts.load`.
