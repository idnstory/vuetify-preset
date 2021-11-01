// Imports
import { injectSassVariables } from "@vuetify/cli-plugin-utils";

export default (api) =>
  injectSassVariables(
    api,
    "@haezoom/vue-cli-plugin-vuetify-preset/preset/variables.scss",
  );
