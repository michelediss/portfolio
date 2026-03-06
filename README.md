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

1. Lavora e pusha i sorgenti su `main`.
2. GitHub Actions esegue build e pubblica automaticamente `dist/` su `gh-pages`.

Manuale (fallback locale):

1. `npm run build`
2. `npm run deploy`

Script helper disponibile: [`deploy.sh`](/home/miche/portfolio/deploy.sh).

## Strategia branch

- `main`: contiene solo il codice sorgente del progetto.
- `gh-pages`: contiene solo i file statici buildati necessari al sito online.

## Note tecniche

- `MenuComponent` e listener globali sono gestiti a livello applicazione.
- La gestione skin/tema dinamica e shortcut (`S`, double tap mobile) è centralizzata in `src/utils/skinController.js`.
- Le 12 coppie font sono self-hosted in `public/fonts` con preload in `public/index.html` e warmup runtime via `document.fonts.load`.
- Il routing usa `createWebHistory()` (URL senza `#`) con fallback SPA GitHub Pages via `public/404.html` + restore route in `public/index.html`.
