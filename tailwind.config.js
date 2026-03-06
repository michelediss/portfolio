// Importa i moduli necessari
const { generateResponsiveBaseFontSize, generateTypographicScale } = require('./src/swell-scales/typo-scale/typography');
const typographyConfig = require('./src/swell-scales/typo-scale/typography-controller.json');

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
