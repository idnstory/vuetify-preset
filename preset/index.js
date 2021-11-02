require("./overrides.sass");
const kebabCase = require("lodash.kebabcase");

// Get all .vue icons files within `src/icons`
const hzIcons = require.context("./icons", true, /\.vue$/);
const icons = {};
hzIcons.keys().forEach((file) => {
  const componentConfig = hzIcons(file);
  const name = file
    .replace(/index.js/, "")
    .replace(/^\.\//, "")
    .replace(/\.\w+$/, "");
  const componentName = kebabCase(`Hz${name}`);
  icons[componentName] = {
    component: componentConfig.default || componentConfig,
  };
});

const preset = {
  breakpoint: {
    // mobileBreakpoint: 1264,
    scrollBarWidth: 16,
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1170 - 16,
      lg: 2080 - 16,
    },
  },
  theme: {
    themes: {
      light: {
        primary: "#FF7133",
        secondary: "#7C61E8",
        accent: "#82B1FF",
        error: "#f03e3e",
        info: "#2196F3",
        success: "#37b24d",
        warning: "#FFC107",
        background: "#F8F8F8",
        green: "#51cf66",
        "red-dark": "#f03e3e",
        purple: "#9b88e9",
      },
    },
  },
  icons: {
    values: icons,
  },
};

module.exports = { preset };
