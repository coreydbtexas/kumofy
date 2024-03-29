module.exports = {
  extends: "airbnb-typescript-prettier",
  rules: {
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off"
  }
};