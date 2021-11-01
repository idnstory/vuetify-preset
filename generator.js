const {
  // injectGoogleFontLink,  // 구글 폰트 연결하고 싶을 때 활성화
  injectHtmlLink,
  generatePreset,
} = require("@vuetify/cli-plugin-utils");

module.exports = (api) => {
  // 구글 폰트 연결하고 싶을 때
  // 참고: https://vuetifyjs.com/en/features/presets/#generator

  generatePreset(api, `'@haezoom/vue-cli-plugin-vuetify-preset/preset'`, () => {
    return injectHtmlLink(
      api,
      `https://cdn.haezoom.io/css/SpoqaHanSansNeo.css`,
      'rel="stylesheet"',
    );
  });
};
