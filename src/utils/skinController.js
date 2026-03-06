import { getRandomHSLuvColor } from "./colorGenerator";
import { fontAssign } from "./fontAssign";

export function ensureBodyStyleClass() {
  const hasStyleClass = Array.from(document.body.classList).some((className) =>
    className.startsWith("style-")
  );
  if (!hasStyleClass) {
    fontAssign();
  }
}

export function applyRandomSkin() {
  getRandomHSLuvColor();
  fontAssign();
}

export function applyRandomColor() {
  getRandomHSLuvColor();
}

export function setupGlobalSkinShortcuts() {
  const handleKeydown = (event) => {
    if (event.code === "KeyS") {
      applyRandomSkin();
    }
  };

  let lastTap = 0;
  const doubleTapTimeout = 300;
  const handleTouchStart = () => {
    const currentTime = Date.now();
    const tapInterval = currentTime - lastTap;
    if (tapInterval < doubleTapTimeout && tapInterval > 0) {
      applyRandomSkin();
    }
    lastTap = currentTime;
  };

  window.addEventListener("keydown", handleKeydown);
  document.addEventListener("touchstart", handleTouchStart, { passive: true });

  return () => {
    window.removeEventListener("keydown", handleKeydown);
    document.removeEventListener("touchstart", handleTouchStart);
  };
}

export function warmupSelfHostedFonts() {
  if (!("fonts" in document)) return Promise.resolve();

  const fontDescriptors = [
    "400 1rem Average",
    "400 1rem 'Istok Web'",
    "italic 400 1rem 'Istok Web'",
    "400 1rem Bitter",
    "400 1rem 'PT Sans'",
    "700 1rem 'PT Sans'",
    "italic 400 1rem 'PT Sans'",
    "400 1rem Merriweather",
    "300 1rem Mulish",
    "300 1rem Nunito",
    "400 1rem Nunito",
    "400 1rem 'PT Serif'",
    "700 1rem Rufina",
    "400 1rem 'Playfair Display'",
    "900 1rem 'Playfair Display'",
    "400 1rem Oswald",
    "400 1rem Quattrocento",
    "500 1rem Raleway",
    "400 1rem 'Roboto Slab'",
    "400 1rem Ruda",
    "400 1rem Sintony",
    "400 1rem 'Source Sans Pro'",
    "900 1rem 'Source Sans Pro'",
    "400 1rem Dosis",
    "400 1rem 'Titillium Web'",
    "400 1rem Vollkorn",
    "italic 400 1rem Vollkorn",
  ];

  const jobs = fontDescriptors.map((descriptor) => document.fonts.load(descriptor));
  return Promise.allSettled(jobs);
}
