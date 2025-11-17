// scripts.js - additional interactivity (flip cards, etc.)

document.addEventListener('DOMContentLoaded', () => {
  // Flip card click support (optional if you want click to flip instead of hover)
  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
      const inner = card.querySelector('.flip-card-inner');
      inner.style.transform = inner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
    });
  });
});



