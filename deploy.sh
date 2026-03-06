#!/bin/bash
set -euo pipefail

# Helper locale: pubblica solo l'output statico (dist/) su gh-pages.
# Il branch main resta dedicato ai sorgenti.
npm run build
npm run deploy
