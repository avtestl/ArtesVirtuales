import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintPluginTailwind from "eslint-plugin-tailwindcss";


export default [
  {files: ["**/*.{js,mjs,cjs,jsx,astro}"]},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginTailwind.configs["flat/recommended"],
  {
    ...pluginReact.configs.flat.recommended,
    files: ["./src/**/*.{jsx}"],
  },
  {
    rules : {
      "no-var": "error",
      "astro/no-exports-from-components": "error",
      "no-unused-vars": "warn",
      "react/jsx-uses-vars": "error",
      "react/jsx-uses-react": "error" 
    }
  }
];