/** eslint.config.mjs */
import { defineConfig } from "eslint-define-config";

export default defineConfig({
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["@typescript-eslint", "react", "react-hooks", "jsx-a11y", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off", // <-- add this line
    // other rules you may already have
  },
  settings: {
    react: {
      version: "detect",
    },
  },
});
