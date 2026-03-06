// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles/tailwind.css';
import hoverAnimate from './directives/hoverAnimate';
import { register } from 'swiper/element/bundle';
import { setupGlobalSkinShortcuts, warmupSelfHostedFonts } from './utils/skinController';


register();

const app = createApp(App);

setupGlobalSkinShortcuts();
warmupSelfHostedFonts();

// Usa la direttiva personalizzata
app.directive('hover-animate', hoverAnimate);

app.use(router);
app.mount('#app');
