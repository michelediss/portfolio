#!/bin/bash

# 1. Esegui il build del progetto con Vue CLI
npm run build

# 2. Committa e pusha tutto il contenuto dell'app tranne la cartella dist sul ramo main
echo "Inserisci il messaggio del commit per main:"
read commit_message_main
git add .
git reset dist # Rimuove dist dall'indice, se già aggiunto
git commit -m "$commit_message_main"
git push origin main

# 3. Committa e pusha la cartella dist sul ramo gh-pages usando subtree
echo "Inserisci il messaggio del commit per gh-pages:"
read commit_message_ghpages
# Qui possiamo forzare il subtree split usando HEAD di main, oppure un branch specifico
git subtree push --prefix dist origin gh-pages -m "$commit_message_ghpages"
