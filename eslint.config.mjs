import js from "@eslint/js";
import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      js,
    },
    extends: ["@eslint/js/recommended"],
    languageOptions: {
      globals: globals.browser,
    },
  },

  tseslint.configs.recommended,

  {
    files: ["**/*.{jsx,tsx}"],
    extends: ["plugin:react/recommended"],
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);
