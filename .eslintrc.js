module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "airbnb-base", "plugin:vue/essential", "plugin:vue/recommended", "plugin:nuxt/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue", "prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "linebreak-style": 0,
    // quotes: ["error", "double"],
    // "max-len": ["error", { code: 140 }],
    // Убираем event из списка запрещенных глобальных переменных, оставляем ноунеймный fdescribe
    "no-restricted-globals": ["error", ""],
    // Vue settins
    // Убираем максимальное количество атрибутов в строке
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: Infinity,
          allowFirstLine: true,
        },
        multiline: {
          max: Infinity,
          allowFirstLine: false,
        },
      },
    ],
    "vue/attribute-hyphenation": [
      "error",
      "never",
      {
        ignore: [],
      },
    ],
  },
  settings: {
    "import/resolver": {
      nuxt: {
        extensions: [".js", ".vue"],
      },
    },
  },
};
