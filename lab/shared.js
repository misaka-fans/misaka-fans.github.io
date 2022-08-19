// Applying theme
import {
  argbFromHex,
  themeFromSourceColor,
  applyTheme,
} from "https://cdn.jsdelivr.net/gh/huge-pancake/tiny-material/system/color-system.js";
const theme = themeFromSourceColor(
  argbFromHex(localStorage.getItem("key-color") || "#114514")
);
applyTheme(theme, { target: document.documentElement, brightnessSuffix: true });

// Applying components
import * as TM from "https://cdn.jsdelivr.net/gh/huge-pancake/tiny-material/index.js";
TM;

// Applying styles
import { TypographyStylesGenerator } from "https://cdn.jsdelivr.net/gh/huge-pancake/tiny-material/system/typography-system.js";

import FocusRingStyle from "https://cdn.jsdelivr.net/gh/huge-pancake/tiny-material/shared/focus-ring-style.js";
let FocusRingStyleText = [];
for (let i = 0; i < FocusRingStyle.cssRules.length; i++) {
  FocusRingStyleText.push(FocusRingStyle.cssRules[i].cssText);
}

const iconNames = {
  theme: {
    light: "material-symbols:sunny",
    dark: "material-symbols:mode-night",
  },
  dir: {
    ltr: "material-symbols:format-textdirection-l-to-r",
    rtl: "material-symbols:format-textdirection-r-to-l",
  },
};
window.iconNames = iconNames;
const updateThemeIcon = (on, theme) => {
  on.setAttribute("icon", iconNames.theme[theme !== 'light' ? 'light' : 'dark']);
};
const updateDirIcon = (on, dir) => {
  on.setAttribute("icon", iconNames.dir[dir !== 'ltr' ? 'ltr' : 'rtl']);
};
/**
 * @param {Event} e 
 */
const toggleTheme = (e) => {
  const oldTheme = document.documentElement.getAttribute("data-md-theme");
  const newTheme = oldTheme === "light" ? "dark" : "light";
  localStorage.setItem("md-theme", newTheme);
  document.documentElement.setAttribute("data-md-theme", newTheme);
  updateThemeIcon(e.target.querySelector("md-icon"), newTheme);
};
/**
 * @param {Event} e 
 */
const toggleDir = (e) => {
  const oldDir = document.documentElement.getAttribute("dir");
  const newDir = oldDir === "rtl" ? "ltr" : "rtl";
  localStorage.setItem("md-dir", newDir);
  document.documentElement.setAttribute("dir", newDir);
  document
    .querySelectorAll("md-badge")
    .forEach((badge) => badge.setAttribute("dir", newDir));
  updateDirIcon(e.target.querySelector("md-icon"), newDir);
};

// Applying styles
const CSSBlock = document.createElement("style");
CSSBlock.innerHTML = /* css */ `
  .index h2 { ${TypographyStylesGenerator("label", "L")} }
  .index li { ${TypographyStylesGenerator("label", "M")} }
  .table-of-ctt ul li a { ${TypographyStylesGenerator("body", "M")} }
  .color-item { ${TypographyStylesGenerator("label", "L")} }
  ${FocusRingStyleText.join("")}
`;
document.head.appendChild(CSSBlock);

addEventListener("DOMContentLoaded", () => {
  const themeTgl = document.querySelector("#theme-tgl");
  const dirTgl = document.querySelector("#dir-tgl");

  // Init
  const localDarkData = localStorage.getItem("md-theme");
  const systemDarkData = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  let theme;
  if (localDarkData) {
    theme = localDarkData;
  } else if (systemDarkData) {
    theme = "dark";
  } else {
    theme = "light";
  }
  const dir = localStorage.getItem("md-dir") || "ltr";

  // Applying
  document.documentElement.setAttribute("data-md-theme", theme);
  document.documentElement.setAttribute("dir", dir);
  document.querySelectorAll("md-badge").forEach((badge) => {
    badge.setAttribute("dir", dir);
  });

  updateThemeIcon(themeTgl.querySelector("md-icon"), theme);
  updateDirIcon(dirTgl.querySelector("md-icon"), dir);
  console.log('initing', theme, dir, dirTgl.querySelector("md-icon"), themeTgl.querySelector("md-icon"));

  themeTgl?.addEventListener("click", toggleTheme);
  dirTgl?.addEventListener("click", toggleDir);
});
