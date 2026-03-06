//router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/home.vue';
import PortfolioPage from '../components/portfolio.vue';
import ResumePage from '../components/Resume.vue';
import PhilosophyPage from '../components/Philosophy.vue';
import { ensureBodyStyleClass, applyRandomColor } from '../utils/skinController';

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
  history: createWebHistory(),
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
  applyRandomColor();
  ensureBodyStyleClass();
  next();
});

export default router;
