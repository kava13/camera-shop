module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "airbnb-base", "plugin:vue/essential", "plugin:vue/vue3-recommended", "plugin:nuxt/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "linebreak-style": 0,
    quotes: ["error", "double"],
  },
  settings: {
    "import/resolver": {
      nuxt: {
        extensions: [".js", ".vue"],
      },
    },
  },
};
