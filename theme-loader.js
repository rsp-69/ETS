/* ==========================================================
   ETS THEME LOADER — RESTORED ARCHITECTURE (Views / Modes / Themes)
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("ETS_THEME");   // THEME (view theme OR org theme)
  const mode  = localStorage.getItem("ETS_MODE");    // MODE (personal, org, vapourware, etc.)

  const finalTheme = theme || "myView";              // Default view theme

  applyTheme(finalTheme);
  applyBodyClass(finalTheme);
  setupThemeSelector(finalTheme);
});

/* ==========================================================
   APPLY BODY CLASS FOR THEME
   ========================================================== */

function applyBodyClass(themeName) {
  document.body.classList.forEach(cls => {
    if (cls.startsWith("theme-")) {
      document.body.classList.remove(cls);
    }
  });
  document.body.classList.add(`theme-${themeName}`);
}

/* ==========================================================
   THEME REGISTRY (Views + Org Themes)
   ========================================================== */

const themes = {
  /* ===== VIEWS ===== */
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

  tiramisu: {
    "--body-bg": "#F2C299",
    "--pg-bg": "#FFD9A0",
    "--text": "#201A17",
    "--main": "#E49C69",
    "--headings": "#5C3B2E",
    "--subheadings": "#201A17",
    "--lines": "#E49C69",
    "--borders": "#5C3B2E"
  },

  retro_tech: {
    "--body-bg": "#C0C0C0",
    "--pg-bg": "#353837",
    "--text": "#353837",
    "--main": "#C0C0C0",
    "--headings": "#062A8F",
    "--subheadings": "#005540",
    "--lines": "#FFB227",
    "--borders": "#B32427"
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

  /* ===== ORG THEMES ===== */
  "ALDI Australia": {
    "--main": "#00205B",
    "--pg-bg": "#00205B",
    "--body-bg": "#FFFFFF",
    "--text": "#00205B",
    "--headings": "#0071CE",
    "--subheadings": "#F28E1C",
    "--lines": "#FDC300",
    "--borders": "#E30613"
  },

  AFL: {
    "--main": "#003B7A",
    "--pg-bg": "#003B7A",
    "--body-bg": "#FFFFFF",
    "--text": "#002147",
    "--headings": "#E62333",
    "--subheadings": "#0072CE",
    "--lines": "#333333",
    "--borders": "#FFFFFF"
  },
  
"Bega Group": {
  "--main": "#D71920",
  "--pg-bg": "#F7F3E8",
  "--body-bg": "#FFFFFF",
  "--text": "#00205B",
  "--headings": "#006F3C",
  "--subheadings": "#A3161A",
  "--lines": "#004F2A",
  "--borders": "#D71920"
},

  "Bunnings Australia": {
    "--main": "#005B4F",
    "--pg-bg": "#005B4F",
    "--body-bg": "#F5F5F5",
    "--text": "#333333",
    "--headings": "#D52B1E",
    "--subheadings": "#00483A",
    "--lines": "#005B4F",
    "--borders": "#FFCC00"
  },

  "Coles Group": {
    "--main": "#E00024",
    "--pg-bg": "#E00024",
    "--body-bg": "#FFFFFF",
    "--text": "#707070",
    "--headings": "#FFCC00",
    "--subheadings": "#B00020",
    "--lines": "#F5F5F5",
    "--borders": "#707070"
  },

  "Kmart Australia": {
    "--main": "#E21836",
    "--pg-bg": "#E21836",
    "--body-bg": "#FFFFFF",
    "--text": "#000000",
    "--headings": "#005EB8",
    "--subheadings": "#00AEEF",
    "--lines": "#00205B",
    "--borders": "#000000"
  },

  "Yarra Trams": {
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

  document.documentElement.setAttribute("data-ets-theme", themeName);

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

  allVars.forEach(v => {
    document.documentElement.style.removeProperty(v);
  });

  if (theme["--main"] && !theme["--pg-bg"]) {
    theme["--pg-bg"] = theme["--main"];
  }

  Object.keys(theme).forEach(variable => {
    document.documentElement.style.setProperty(variable, theme[variable]);
  });
}

/* ==========================================================
   THEME SELECTOR UI (Dropdown)
   ========================================================== */

function setupThemeSelector(currentTheme) {
  const selector = document.getElementById("themeSelector");
  if (!selector) return;

  Object.keys(themes).forEach(themeName => {
    const option = document.createElement("option");
    option.value = themeName;
    option.textContent = themeName.replace(/_/g, " ");
    if (themeName === currentTheme) option.selected = true;
    selector.appendChild(option);
  });

  selector.addEventListener("change", e => {
    const selected = e.target.value;
    localStorage.setItem("ETS_THEME", selected);
    applyTheme(selected);
    applyBodyClass(selected);
  });
}

/* ==========================================================
   SELECTED STATE FOR GLASS BUTTONS
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("ETS_THEME");

  if (savedTheme) {
    const activeBtn = document.querySelector(`.glass-btn.${savedTheme}`);
    if (activeBtn) activeBtn.classList.add("selected");
  }

  document.querySelectorAll(".glass-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".glass-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");

      const detailsBlock = document.getElementById("detailsBlock");
      if (detailsBlock) {
        detailsBlock.classList.remove("hidden");
        detailsBlock.classList.add("reveal");
      }
    });
  });
});
