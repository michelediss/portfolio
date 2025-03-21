// utils/fontAssign.js

let lastRandomNum = null; // Variabile per tenere traccia dell'ultimo numero generato

export function fontAssign() {
  let randomNum;

  // Continua a generare un numero casuale finché non è diverso dall'ultimo
  do {
    randomNum = Math.floor(Math.random() * 12) + 1;
  } while (randomNum === lastRandomNum);

  // Aggiorna il valore dell'ultimo numero generato
  lastRandomNum = randomNum;

  // Rimuovi eventuali classi esistenti che iniziano con "style-"
  document.body.classList.forEach(className => {
    if (className.startsWith('style-')) {
      document.body.classList.remove(className);
    }
  });

  // Aggiungi la nuova classe generata dinamicamente
  document.body.classList.add(`style-${randomNum}`);
}
