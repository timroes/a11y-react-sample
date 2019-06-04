module.exports = {
  "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true
      }
  },
  "plugins": [
    "jsx-a11y"
  ],
  "extends": [
    "plugin:jsx-a11y/recommended"
    // "plugin:jsx-a11y/strict"
  ],
};