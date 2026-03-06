const vueParser = require("vue-eslint-parser");
const babelParser = require("@babel/eslint-parser");
const vuePlugin = require("eslint-plugin-vue");

module.exports = [
  {
    files: ["src/**/*.{js,vue}"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: babelParser,
        requireConfigFile: false,
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        document: "readonly",
        window: "readonly",
      },
    },
    plugins: {
      vue: vuePlugin,
    },
    rules: {
      ...vuePlugin.configs["flat/recommended"].rules,
      "vue/multi-word-component-names": "off",
    },
  },
];
