/* ==========================================================
   ETS THEME LOADER — FINAL VERSION
   Applies theme based on localStorage selection
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const selectedTheme = localStorage.getItem("ETS_THEME") || "myView";
  applyTheme(selectedTheme);
});

/* ============================
   THEME REGISTRY
   ============================ */

const themes = {
  /* ============================
     1. MY VIEW (Your custom palette)
     ============================ */
  myView: {
    "--color-body-bg": "#013220",
    "--color-card-bg": "#1B1B1B",
    "--color-primary-text": "#F4EAD5",
    "--color-accent-1": "#2EBB57",
    "--color-accent-2": "#F4C430",
    "--color-accent-3": "#FFB703",
    "--color-accent-4": "#1B1B1B",
    "--color-accent-5": "#F4EAD5",
    "--font-family": "'Inter Tight', sans-serif",
    "--font-family-h1": "'Syncopate', sans-serif"
  },

  /* ============================
     2. LIGHT MODE (Citrus + Sky Aqua)
     ============================ */
  light: {
    "--color-body-bg": "#F8F9FA",   // Bright Snow
    "--color-card-bg": "#E9ECEF",   // Platinum
    "--color-primary-text": "#000000",
    "--color-accent-1": "#DEE2E6",  // Alabaster Grey
    "--color-accent-2": "#CED4DA",  // Pale Slate
    "--color-accent-3": "#FFB703",  // Citrus Peel (highlight)
    "--color-accent-4": "#4CC9F0",  // Sky Aqua (secondary highlight)
    "--color-accent-5": "#6C757D"   // Contrast grey
  },

  /* ============================
     3. DARK MODE (Forest Mint + Raspberry)
     ============================ */
  dark: {
    "--color-body-bg": "#212529",   // Carbon Black
    "--color-card-bg": "#343A40",   // Gunmetal
    "--color-primary-text": "#FFFFFF",
    "--color-accent-1": "#2EBB57",  // Forest Mint (highlight)
    "--color-accent-2": "#E30B5D",  // Raspberry (secondary highlight)
    "--color-accent-3": "#495057",  // Iron Grey
    "--color-accent-4": "#6C757D",  // Slate Grey
    "--color-accent-5": "#ADB5BD"   // Pale Slate
  },

  /* ============================
     4. COMPANY THEMES
     ============================ */

  coles: {
    "--color-body-bg": "#FFFFFF",
    "--color-card-bg": "#F2F2F2",
    "--color-primary-text": "#000000",
    "--color-accent-1": "#E41F26",
    "--color-accent-2": "#005AAA",
    "--color-accent-3": "#090104",
    "--color-accent-4": "#F2F2F2",
    "--color-accent-5": "#4D4D4F"
  },

  afl: {
    "--color-body-bg": "#FFFFFF",
    "--color-card-bg": "#F2F2F2",
    "--color-primary-text": "#000000",
    "--color-accent-1": "#002B5C",
    "--color-accent-2": "#E31837",
    "--color-accent-3": "#FFFFFF",
    "--color-accent-4": "#F2F2F2",
    "--color-accent-5": "#000000"
  },

  pfd: {
    "--color-body-bg": "#FFFFFF",
    "--color-card-bg": "#F2F2F2",
    "--color-primary-text": "#000000",
    "--color-accent-1": "#004B8D",
    "--color-accent-2": "#E41F26",
    "--color-accent-3": "#FFFFFF",
    "--color-accent-4": "#F2F2F2",
    "--color-accent-5": "#000000"
  },

  auspost: {
    "--color-body-bg": "#FFFFFF",
    "--color-card-bg": "#F2F2F2",
    "--color-primary-text": "#000000",
    "--color-accent-1": "#E60000",
    "--color-accent-2": "#000000",
    "--color-accent-3": "#FFFFFF",
    "--color-accent-4": "#F2F2F2",
    "--color-accent-5": "#000000"
  },

  woolworths: {
    "--color-body-bg": "#FFFFFF",
    "--color-card-bg": "#F2F2F2",
    "--color-primary-text": "#000000",
    "--color-accent-1": "#006E3A",
    "--color-accent-2": "#78BE20",
    "--color-accent-3": "#FFFFFF",
    "--color-accent-4": "#F2F2F2",
    "--color-accent-5": "#000000"
  }
};

/* ============================
   APPLY THEME
   ============================ */

function applyTheme(themeName) {
  const theme = themes[themeName];

  if (!theme) {
    console.warn("ETS: Unknown theme:", themeName);
    return;
  }

  Object.keys(theme).forEach(variable => {
    document.documentElement.style.setProperty(variable, theme[variable]);
  });
}
