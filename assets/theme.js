// THEME.JS — Handles dark/light mode toggle

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  // check localStorage for saved theme
  if(localStorage.getItem('theme') === 'light'){
    body.classList.add('light-mode');
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if(body.classList.contains('light-mode')){
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  });
});

