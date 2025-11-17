// main.js - site-wide interactivity
document.addEventListener('DOMContentLoaded', () => {

  // Highlight active nav link
  const navLinks = document.querySelectorAll('.nav a');
  const path = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(a => {
    if(a.getAttribute('href') === path) a.style.textDecoration = 'underline';
  });

  // Add button ripple effect
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
      circle.style.transition = 'transform 600ms ease, opacity 600ms ease';
      circle.style.transform = 'scale(1)';
      circle.style.opacity = '1';
      circle.className = 'ripple';
      btn.style.position = 'relative';
      btn.appendChild(circle);
      setTimeout(()=>{ circle.style.transform='scale(20)'; circle.style.opacity='0'; }, 20);
      setTimeout(()=>{ circle.remove(); }, 700);
    });
  });

  // Problem-Solving form handling: enhanced mailto builder
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

      const subject = encodeURIComponent(`Portfolio enquiry from ${name || 'Guest'}`);
      let body = `Name: ${name}\nEmail: ${email}\nType: ${booking}\nDate: ${date}\n\nMessage:\n${message}`;
      body = encodeURIComponent(body);
      const to = 'c.n.arnold-harrison@edu.salford.ac.uk';
      const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
      window.location.href = mailto;

      const status = document.getElementById('ps-status');
      if(status){
        status.textContent = 'Your email client should open with the message. If not, copy & paste the message.';
      }
      form.reset();
    });
  }

});

