// Importa i moduli necessari
const { generateResponsiveBaseFontSize, generateTypographicScale } = require('./src/swell-scales/typo-scale/typography');
const typographyConfig = require('./src/swell-scales/typo-scale/typography-controller.json');
const { addGoogleFontsLink, findFontPairById } = require('./src/swell-scales/font-pairing/fonts');
const fontChoice = require('./src/swell-scales/font-pairing/fontChoice.json');

// Trova i dati della famiglia di font
const fontFamily = findFontPairById(fontChoice.chosenPair);
console.log("Dati della famiglia di font:", fontFamily);
if (typeof document !== "undefined" && fontFamily && fontFamily.fontUrl) {
  console.log("Aggiunta del link del font:", fontFamily.fontUrl);
  addGoogleFontsLink(fontFamily.fontUrl);
} else {
  console.log("Dati della famiglia di font non disponibili o non validi.");
}



// Genera le dimensioni base dei font e la scala tipografica personalizzata
const responsiveBaseFontSize = generateResponsiveBaseFontSize(
  typographyConfig.responsiveBaseFontSize.baseSize,
  typographyConfig.responsiveBaseFontSize.incrementFactor
);
const customFontSizeScale = generateTypographicScale(
  typographyConfig.customFontSizeScale.f0,
  typographyConfig.customFontSizeScale.r,
  typographyConfig.customFontSizeScale.n,
  typographyConfig.customFontSizeScale.count
);

// Configurazione di Tailwind CSS
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: customFontSizeScale,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    function({ addBase }) {
      addBase(responsiveBaseFontSize);
    },
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
};