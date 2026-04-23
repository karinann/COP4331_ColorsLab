// eslint.config.js
export default [
  {
    // Apply to all JS files
    files: ["**/*.js"],

    // Tell ESLint these are browser globals
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        // Browser globals
        window: "readonly",
        document: "readonly",
        XMLHttpRequest: "readonly",

        // Node module globals for libraries like md5.js
        module: "readonly",
        exports: "readonly",

        // Jest globals
        test: "readonly",
        expect: "readonly",
        describe: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        jest: "readonly",
        require: "readonly"
      }
    },

    // Recommended rules
    rules: {
      "no-unused-vars": "warn", // unused functions are just warnings
      "no-undef": "error",       // undefined vars are errors
      "semi": ["error", "always"],
      "quotes": ["error", "double"]
    },
  }
];