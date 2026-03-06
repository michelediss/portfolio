import { getRandomHSLuvColor } from "./colorGenerator";
import { fontAssign } from "./fontAssign";

let isFontWarmupDone = false;

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
    if (!isFontWarmupDone) return;
    if (event.code === "KeyS") {
      applyRandomSkin();
    }
  };

  let lastTap = 0;
  const doubleTapTimeout = 300;
  const handleTouchStart = () => {
    if (!isFontWarmupDone) return;
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

function warmupStyleRender() {
  const container = document.createElement("div");
  container.setAttribute("aria-hidden", "true");
  container.style.position = "fixed";
  container.style.left = "-9999px";
  container.style.top = "-9999px";
  container.style.visibility = "hidden";
  container.style.pointerEvents = "none";
  container.style.contain = "layout style paint";

  for (let i = 1; i <= 12; i += 1) {
    const styleRoot = document.createElement("div");
    styleRoot.className = `style-${i}`;

    const heading = document.createElement("div");
    heading.className = "heading";
    heading.textContent = "Warmup Heading";

    const paragraph = document.createElement("div");
    paragraph.className = "paragraph";
    paragraph.textContent = "Warmup paragraph for font rendering.";

    styleRoot.appendChild(heading);
    styleRoot.appendChild(paragraph);
    container.appendChild(styleRoot);
  }

  document.body.appendChild(container);
  container.getBoundingClientRect();
  Array.from(container.children).forEach((node) => node.getBoundingClientRect());

  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        container.remove();
        resolve();
      });
    });
  });
}

export function warmupSelfHostedFonts() {
  if (!("fonts" in document)) {
    isFontWarmupDone = true;
    return Promise.resolve();
  }

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
  return Promise.allSettled(jobs)
    .then(() => warmupStyleRender())
    .catch(() => {})
    .finally(() => {
      isFontWarmupDone = true;
    });
}
