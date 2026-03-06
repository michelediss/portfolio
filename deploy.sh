#!/bin/bash

# 1. Esegui il build del progetto con Vue CLI
npm run build

# 2. Richiedi il messaggio del commit (unico per entrambi i rami)
echo "Inserisci il messaggio del commit:"
read commit_message

# 3. Committa e pusha tutto il contenuto dell'app tranne la cartella dist sul ramo main
git add .
git reset dist  # Rimuove dist dall'indice, in modo che non venga incluso nel commit per main
git commit -m "$commit_message"
git push origin main

# 4. Pubblica la cartella dist su gh-pages
npm run deploy
