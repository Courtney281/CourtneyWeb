document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme) htmlEl.setAttribute('data-theme', savedTheme);

    // Update toggle icon
    updateToggleIcon();

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateToggleIcon();
    });

    function updateToggleIcon() {
        const currentTheme = htmlEl.getAttribute('data-theme');
        themeToggle.textContent = currentTheme === 'dark' ? '☾' : '☀';
    }

    // Ripple effect for buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const circle = document.createElement('span');
            circle.style.position = 'absolute';
            circle.style.width = circle.style.height = '10px';
            circle.style.background = 'rgba(255,255,255,0.3)';
            circle.style.borderRadius = '50%';
            circle.style.left = (e.offsetX - 5) + 'px';
            circle.style.top = (e.offsetY - 5) + 'px';
            circle.style.pointerEvents = 'none';
            circle.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
            circle.style.transform = 'scale(1)';
            circle.style.opacity = '1';
            circle.className = 'ripple';
            btn.style.position = 'relative';
            btn.appendChild(circle);
            setTimeout(()=>{ circle.style.transform='scale(20)'; circle.style.opacity='0'; }, 20);
            setTimeout(()=>{ circle.remove(); }, 700);
        });
    });
});

// Theme toggle - works site-wide
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const htmlEl = document.documentElement;

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme") || "dark";
  htmlEl.setAttribute("data-theme", savedTheme);
  toggle.textContent = savedTheme === "dark" ? "☾" : "☀";

  toggle.addEventListener("click", () => {
    const currentTheme = htmlEl.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    htmlEl.setAttribute("data-theme", newTheme);
    toggle.textContent = newTheme === "dark" ? "☾" : "☀";
    localStorage.setItem("theme", newTheme);
  });
});


