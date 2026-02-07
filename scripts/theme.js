export function initTheme(theme) {
  // Initialize dark mode immediately
  const savedDarkMode = localStorage.getItem("darkMode");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const isDark =
    savedDarkMode === "true" || (savedDarkMode === null && prefersDark);

  document.documentElement.classList.toggle("dark", isDark);

  localStorage.setItem("darkMode", isDark);
}
