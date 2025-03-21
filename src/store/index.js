import { createStore } from 'vuex';
import { gsap } from 'gsap';

const store = createStore({
  state: {
    isMenuOpen: false,
  },
  mutations: {
    setMenuOpen(state, isOpen) {
      state.isMenuOpen = isOpen;
    },
  },
  actions: {
    closeMenuAndNavigate({ commit }) {
      return new Promise((resolve) => {
        gsap.to('.menu-fullscreen', {
          y: '-100%',
          duration: 0.4,
          ease: 'power2.in',
          onComplete: () => {
            commit('setMenuOpen', false); // Chiudi il menu
            resolve(); // Notifica che l'animazione è terminata
          },
        });
      });
    },
  },
});

export default store;
