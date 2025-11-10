// assets/theme.js
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("toggle-mode");
  const body = document.body;

  // Load theme from localStorage
  if(localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    if(toggle.checked) {
      body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
  });
});

