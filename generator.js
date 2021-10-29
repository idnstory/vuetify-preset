const {
  // injectGoogleFontLink,  // 구글 폰트 연결하고 싶을 때 활성화
  injectHtmlLink,
  generatePreset,
} = require("@vuetify/cli-plugin-utils");

function injectSpoqaFontLink(api, font) {
  return injectHtmlLink(
    api,
    `https://cdn.haezoom.io/css/SpoqaHanSans${font}.css`,
    'rel="stylesheet"',
  );
}

module.exports = (api) => {
  // 구글 폰트 연결하고 싶을 때
  // 참고: https://vuetifyjs.com/en/features/presets/#generator
  generatePreset(api, "hz", () => {
    injectSpoqaFontLink(api, "Neo");
  });
};
