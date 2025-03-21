// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles/tailwind.css';
import hoverAnimate from './directives/hoverAnimate';
import { register } from 'swiper/element/bundle';
import { handleDoubleTap } from './router'; 


register();

const app = createApp(App);

// Variabili per gestire il double tap
let lastTap = 0;
const doubleTapTimeout = 300;

// Listener globale per il double tap
document.addEventListener('touchstart', function () {
  const currentTime = new Date().getTime();
  const tapInterval = currentTime - lastTap;

  if (tapInterval < doubleTapTimeout && tapInterval > 0) {
    handleDoubleTap(); // Esegui la funzione di double tap
  }

  lastTap = currentTime;
});

// Usa la direttiva personalizzata
app.directive('hover-animate', hoverAnimate);

app.use(router);
app.mount('#app');
