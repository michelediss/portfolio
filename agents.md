# Portfolio Stabilization & Refactor Plan

## Sprint 1 - Stabilita Runtime
- [x] Migrare lifecycle Vue 2 -> Vue 3 (`beforeDestroy` -> `beforeUnmount`).
- [x] Correggere cleanup listener in `v-hover-animate`.
- [x] Mantenere `MenuComponent` solo in `App.vue` (rimuovere duplicati dalle pagine).
- [x] Sostituire `@click.native` con `@click` su `router-link`.
- [x] Rimuovere bug latente nel metodo locale `fontAssign` in `home.vue`.
- [x] Verifica: build.
- [ ] Verifica manuale: navigazione e menu.

## Sprint 2 - Igiene Repo e Tooling
- [x] Ripristinare `npm run lint` funzionante.
- [x] Correggere `deploy.sh` con comando deploy valido.
- [x] Rimuovere dipendenze duplicate/deprecate (`node-sass`, duplicati Tailwind/Autoprefixer).
- [x] Smettere di tracciare `node_modules` e `dist` nel branch di sviluppo.
- [x] Verifica: lint + build.
- [ ] Verifica: working tree pulito in condizioni standard.

## Sprint 3 - Refactor Architetturale
- [x] Centralizzare side effects globali (skin, keydown, double tap) in un modulo dedicato.
- [x] Alleggerire router da side effects non di routing.
- [x] Rimuovere codice/import non usato.
- [x] Ridurre side effects e log in config Tailwind.
- [x] Aggiornare README con workflow reale.
- [x] Verifica: lint/build.
- [ ] Verifica: regressione funzionale manuale.

## Definition of Done
- [x] `npm ci`
- [x] `npm run lint`
- [x] `npm run build`
- [ ] Smoke test manuale: Home, Portfolio, Resume, Vision, menu, tasto `S`, doppio tap mobile.
