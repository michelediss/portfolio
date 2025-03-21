//router/index.js

import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../components/Home.vue';
import PortfolioPage from '../components/Portfolio.vue';
import ResumePage from '../components/Resume.vue';
import PhilosophyPage from '../components/Philosophy.vue';
import { getRandomHSLuvColor } from '../utils/colorGenerator'; // Importa la funzione di generazione colore
import { fontAssign } from '../utils/fontAssign'; // Importa la funzione di scelta font

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: PortfolioPage
  },
  {
    path: '/resume',
    name: 'Resume',
    component: ResumePage
  },
  {
    path: '/vision',
    name: 'Vision',
    component: PhilosophyPage
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // Aggiungi l'opzione scrollBehavior per gestire lo scroll al top
  scrollBehavior(to, from, savedPosition) {
    // Se è disponibile una posizione salvata, ritorna quella (ad esempio, per il pulsante "indietro" del browser)
    if (savedPosition) {
      return savedPosition;
    } else {
      // Altrimenti, scorri fino in cima
      return { top: 0 };
    }
  }
});

// Hook del router per cambiare il colore di sfondo del body ad ogni cambio di pagina
router.beforeEach((to, from, next) => {
  // Genera un colore HSLuv casuale
  getRandomHSLuvColor();

  // Controlla se c'è già una classe style-[random] assegnata al body
  const hasStyleClass = Array.from(document.body.classList).some(className =>
    className.startsWith('style-')
  );

  // Se la classe style-[random] non è presente, esegui fontAssign
  if (!hasStyleClass) {
    fontAssign();
  }

  next();
});


// Funzione per gestire il doppio tap
function handleDoubleTap() {
  getRandomHSLuvColor();
  fontAssign();
}

// Aggiungi un listener per la barra spaziatrice
window.addEventListener('keydown', (event) => {
  if (event.code === 'KeyS') {
    getRandomHSLuvColor();
    fontAssign();
  }
});

export { handleDoubleTap };

export default router;
