// theme.js - handles dark/light mode toggle with sun/moon

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if(savedTheme === 'light') body.classList.add('light-mode');

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const mode = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);
  });
});


// Theme toggle script
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.toggle("light-mode", savedTheme === "light");
    body.classList.toggle("dark-mode", savedTheme === "dark");
    toggleBtn.textContent = savedTheme === "light" ? "☀️" : "🌙";
  } else {
    // Default dark mode
    body.classList.add("dark-mode");
    toggleBtn.textContent = "🌙";
  }

  // Toggle theme on button click
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");

    const isLight = body.classList.contains("light-mode");
    toggleBtn.textContent = isLight ? "☀️" : "🌙";

    // Save preference
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
});
