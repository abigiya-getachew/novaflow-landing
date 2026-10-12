(function () {
  const themeStorageKey = "novaflow-theme";
  const themeColors = {
    dark: "#12111B",
    light: "#F7F6FB",
  };

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", themeColors[theme]);
  }

  function getInitialTheme() {
    if (typeof document === "undefined") return "light";
    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  }

  function persistTheme(theme) {
    localStorage.setItem(themeStorageKey, theme);
  }

  function initializeTheme() {
    let theme;
    try {
      theme = localStorage.getItem(themeStorageKey);
    } catch {
      return;
    }

    if (theme === "dark" || theme === "light") {
      applyTheme(theme);
    }
  }

  window.novaFlowUtils = { applyTheme, getInitialTheme, persistTheme };
  initializeTheme();
})();
