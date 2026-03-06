// directives/hoverAnimate.js

export default {
  mounted(el) {
    const onMouseEnter = () => {
      el.classList.add('bg-secondary-color');
      el.classList.add('main-text-color');
    };
    const onMouseLeave = () => {
      el.classList.remove('bg-secondary-color');
      el.classList.remove('main-text-color');
    };

    el.__hoverAnimateHandlers = { onMouseEnter, onMouseLeave };
    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mouseleave', onMouseLeave);
  },
  unmounted(el) {
    const handlers = el.__hoverAnimateHandlers;
    if (!handlers) return;
    el.removeEventListener('mouseenter', handlers.onMouseEnter);
    el.removeEventListener('mouseleave', handlers.onMouseLeave);
    delete el.__hoverAnimateHandlers;
  }
};
