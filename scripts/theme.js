const themes={}

// Apply theme function
function applyTheme(themeName, isDark = false) {
  const theme = isDark
    ? themes[themeName + "Dark"] || themes.customDark
    : themes[themeName];

  if (!theme) {
    console.warn(`Theme "${themeName}" not found`);
    return;
  }

  const root = document.documentElement;

  Object.entries(theme).forEach(([variable, value]) => {
    root.style.setProperty(variable, value);
  });

  // Save to localStorage
  localStorage.setItem("currentTheme", themeName);
}

// Initialize theme on page load
export function initTheme() {
  const savedTheme = localStorage.getItem("currentTheme") || "custom";
  const isDark = document.documentElement.classList.contains("dark");

  applyTheme(savedTheme, isDark);
}

// Initialize dark mode immediately
const savedDarkMode = localStorage.getItem("darkMode");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

const isDark =
  savedDarkMode === "true" || (savedDarkMode === null && prefersDark);

document.documentElement.classList.toggle("dark", isDark);
localStorage.setItem("darkMode", isDark);
