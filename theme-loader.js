/* ==========================================================
   ETS THEME LOADER — FINAL VERSION (Semantic Variables)
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("ETS_THEME") || "myView";
  applyTheme(savedTheme);
  setupThemeSelector(savedTheme);
});

/* ==========================================================
   THEME REGISTRY
   ========================================================== */

const themes = {
  myView: {
    "--body-bg": "#013220",
    "--pg-bg": "#1B1B1B",
    "--text": "#F4EAD5",
    "--main": "#1B1B1B",
    "--headings":"#2EBB57",
    "--subheadings": "#FFB703",
    "--lines": "#F4C430",
    "--borders": "#FFB703"
  },

  light: {
    "--body-bg": "#F8F9FA",
    "--pg-bg": "#CED4DA",
    "--text": "#161616",
    "--main": "#DEE2E6",
    "--headings": "#4CC9F0",
    "--subheadings": "#6C757D",
    "--lines": "#FFB703",
    "--borders": "#4CC9F0"
  },

  dark: {
    "--body-bg": "#212529",
    "--pg-bg": "#6C757D",
    "--text": "#EFEFEF",
    "--main": "#6C757D",
    "--headings": "#E30B5D",
    "--subheadings": "#495057",
    "--lines": "#2EBB57",
    "--borders": "#ADB5BD"
  },

  aldi: {
    "--main": "#00205B",
    "--pg-bg": "#00205B",
    "--body-bg": "#FFFFFF",
    "--text": "#00205B",
    "--headings": "#0071CE",
    "--subheadings": "#F28E1C",
    "--lines": "#FDC300",
    "--borders": "#E30613"
  },

  afl: {
    "--main": "#003B7A",
    "--pg-bg": "#003B7A",
    "--body-bg": "#FFFFFF",
    "--text": "#002147",
    "--headings": "#E62333",
    "--subheadings": "#0072CE",
    "--lines": "#333333",
    "--borders": "#FFFFFF"
  },

  bunnings: {
    "--main": "#005B4F",
    "--pg-bg": "#005B4F",
    "--body-bg": "#F5F5F5",
    "--text": "#333333",
    "--headings": "#D52B1E",
    "--subheadings": "#00483A",
    "--lines": "#005B4F",
    "--borders": "#FFCC00"
  },

  coles: {
    "--main": "#E00024",
    "--pg-bg": "#E00024",
    "--body-bg": "#FFFFFF",
    "--text": "#707070",
    "--headings": "#FFCC00",
    "--subheadings": "#B00020",
    "--lines": "#F5F5F5",
    "--borders": "#707070"
  },

  kmart: {
    "--main": "#E21836",
    "--pg-bg": "#E21836",
    "--body-bg": "#FFFFFF",
    "--text": "#000000",
    "--headings": "#005EB8",
    "--subheadings": "#00AEEF",
    "--lines": "#00205B",
    "--borders": "#000000"
  },

  yarra_trams: {
    "--main": "#00653A",
    "--pg-bg": "#00653A",
    "--body-bg": "#FFFFFF",
    "--text": "#333333",
    "--headings": "#67A61A",
    "--subheadings": "#00A499",
    "--lines": "#FED200",
    "--borders": "#0082CA"
  }
};

/* ==========================================================
   APPLY THEME (Semantic, Clean, No Leftovers)
   ========================================================== */

function applyTheme(themeName) {
  const theme = themes[themeName];
  if (!theme) return;

  const allVars = [
    "--body-bg",
    "--pg-bg",
    "--text",
    "--main",
    "--headings",
    "--subheadings",
    "--lines",
    "--borders"
  ];

  // Reset all variables
  allVars.forEach(v => {
    document.documentElement.style.removeProperty(v);
  });

  // Auto-derive pg-bg from main if missing
  if (theme["--main"] && !theme["--pg-bg"]) {
    theme["--pg-bg"] = theme["--main"];
  }

  // Apply theme
  Object.keys(theme).forEach(variable => {
    document.documentElement.style.setProperty(variable, theme[variable]);
  });
}

/* ==========================================================
   THEME SELECTOR UI
   ========================================================== */

function setupThemeSelector(currentTheme) {
  const selector = document.getElementById("themeSelector");
  if (!selector) return;

  // Populate dropdown
  Object.keys(themes).forEach(themeName => {
    const option = document.createElement("option");
    option.value = themeName;
    option.textContent = themeName.replace(/_/g, " ");
    if (themeName === currentTheme) option.selected = true;
    selector.appendChild(option);
  });

  // Listen for changes
  selector.addEventListener("change", e => {
    const selected = e.target.value;
    localStorage.setItem("ETS_THEME", selected);
    applyTheme(selected);
  });
}
