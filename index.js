// Imports
const { injectSassVariables } = require("@vuetify/cli-plugin-utils");

module.exports = (api) =>
  injectSassVariables(
    api,
    "@haezoom/vue-cli-plugin-vuetify-preset/preset/variables.scss",
  );
