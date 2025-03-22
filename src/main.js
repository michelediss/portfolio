// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles/tailwind.css';
import hoverAnimate from './directives/hoverAnimate';
import { register } from 'swiper/element/bundle';
import { handleDoubleTap } from './router';
import { getRandomHSLuvColor } from './utils/colorGenerator';

register();

// ——————— Imposta subito favicon SVG dinamica ———————
const primaryColor = getRandomHSLuvColor();
const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="50" fill="${primaryColor}" />
  </svg>
`;
const dataUri = `data:image/svg+xml,${encodeURIComponent(svg)}`;

let favicon = document.getElementById('dynamic-favicon') 
            || document.querySelector("link[rel='icon']");
if (favicon) {
  favicon.href = dataUri;
} else {
  favicon = document.createElement('link');
  favicon.id = 'dynamic-favicon';
  favicon.rel = 'icon';
  favicon.type = 'image/svg+xml';
  favicon.href = dataUri;
  document.head.appendChild(favicon);
}
// ——————————————————————————————————————————————

const app = createApp(App);

// Variabili per gestire il double tap
let lastTap = 0;
const doubleTapTimeout = 300;

// Listener globale per il double tap
document.addEventListener('touchstart', () => {
  const currentTime = Date.now();
  const tapInterval = currentTime - lastTap;
  if (tapInterval < doubleTapTimeout && tapInterval > 0) {
    handleDoubleTap();
  }
  lastTap = currentTime;
});

app.directive('hover-animate', hoverAnimate);
app.use(router);
app.mount('#app');
