#!/bin/bash

# Esegui il build del progetto con Vue CLI
npm run build

# Chiedi il messaggio del commit
echo "Inserisci il messaggio del commit:"
read commit_message

# Aggiungi tutte le modifiche alla branch dist
git add dist && git commit -m "$commit_message"
git subtree push --prefix dist origin gh-pages   