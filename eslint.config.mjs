import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat();

export default [
  ...compat.extends('eslint-config-standard'),
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];