import {
  DARK_MODE,
  THEME_HTML_ATTRIBUTE,
  THEME_MODE_HTML_ATTRIBUTE,
} from "./constant";

export const changeTheme = (theme) => {
  const htmlNode = document.querySelector("html");
  if (theme) {
    htmlNode?.setAttribute(THEME_HTML_ATTRIBUTE, theme);
  } else {
    htmlNode?.removeAttribute(THEME_HTML_ATTRIBUTE);
  }
};
export const changeMode = () => {
  const htmlNode = document.querySelector("html");
  if (htmlNode?.getAttribute(THEME_MODE_HTML_ATTRIBUTE) === DARK_MODE) {
    htmlNode.removeAttribute(THEME_MODE_HTML_ATTRIBUTE);
  } else {
    htmlNode?.setAttribute(THEME_MODE_HTML_ATTRIBUTE, DARK_MODE);
  }
};

export const isDarkMode = () => {
  const htmlNode = document.querySelector("html");
  return htmlNode?.getAttribute(THEME_MODE_HTML_ATTRIBUTE) === DARK_MODE;
};

export const currentTheme = () => {
  const htmlNode = document.querySelector("html");
  const themeName = htmlNode?.getAttribute(THEME_HTML_ATTRIBUTE)
  return themeName || "";
};
