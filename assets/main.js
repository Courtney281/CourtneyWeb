// main.js - general interactions: form mailto, button ripple effects, micro-animations

document.addEventListener('DOMContentLoaded', () => {

  // Highlight active nav link
  const navLinks = document.querySelectorAll('.nav a');
  const path = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(a => {
    if(a.getAttribute('href') === path) a.style.textDecoration = 'underline';
  });

  // Button hover ripple effect
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const circle = document.createElement('span');
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      circle.style.width = circle.style.height = size + 'px';
      circle.style.left = e.clientX - rect.left - size/2 + 'px';
      circle.style.top = e.clientY - rect.top - size/2 + 'px';
      circle.style.position = 'absolute';
      circle.style.background = 'rgba(255,255,255,0.3)';
      circle.style.borderRadius = '50%';
      circle.style.transform = 'scale(0)';
      circle.style.opacity = '0.7';
      circle.style.pointerEvents = 'none';
      circle.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
      btn.style.position = 'relative';
      btn.appendChild(circle);
      requestAnimationFrame(() => {
        circle.style.transform = 'scale(2)';
        circle.style.opacity = '0';
      });
      setTimeout(() => { circle.remove(); }, 600);
    });
  });

  // Problem-Solving form mailto
  const psForm = document.getElementById('ps-form');
  if(psForm){
    psForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const booking = form.querySelector('[name="booking"]').value.trim();
      const date = form.querySelector('[name="date"]').value;
      const message = form.querySelector('[name="message"]').value.trim();

      const subject = encodeURIComponent(`Website enquiry from ${name || 'Guest'}`);
      let body = `Name: ${name}\nEmail: ${email}\nType: ${booking}\nDate: ${date}\n\nMessage:\n${message}`;
      body = encodeURIComponent(body);
      const to = 'c.n.arnold-harrison@edu.salford.ac.uk';
      const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
      window.location.href = mailto;

      const status = document.getElementById('ps-status');
      if(status){ status.textContent = 'Your email client should open with the message. If not, copy & paste the message.'; }
      form.reset();
    });
  }

});
