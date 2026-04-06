export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module"
    },
    rules: {
      // same idea as "eslint:recommended"
      "no-unused-vars": "warn",
      "no-undef": "error"
    }
  }
];