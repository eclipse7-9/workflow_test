import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    rules: {
      // Aquí puedes poner reglas personalizadas
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
