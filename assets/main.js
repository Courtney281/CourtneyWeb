document.addEventListener("DOMContentLoaded", () => {

  /* ----------------- Flip Cards ----------------- */
  const flipCards = document.querySelectorAll(".flip-card-inner");
  flipCards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  /* ----------------- Problem-Solving Form ----------------- */
  const psForm = document.getElementById("ps-form");
  if (psForm) {
    psForm.addEventListener("submit", (e) => {
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
      if (status) {
        status.textContent = 'Your email client should open with the message. If not, copy & paste the message.';
      }
      form.reset();
    });
  }

  /* ----------------- Button Ripple Effect ----------------- */
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const circle = document.createElement('span');
      circle.className = 'ripple';
      circle.style.width = circle.style.height = '10px';
      circle.style.background = 'rgba(255,255,255,0.3)';
      circle.style.borderRadius = '50%';
      circle.style.position = 'absolute';
      circle.style.left = (e.offsetX - 5) + 'px';
      circle.style.top = (e.offsetY - 5) + 'px';
      circle.style.pointerEvents = 'none';
      circle.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
      btn.style.position = 'relative';
      btn.appendChild(circle);

      setTimeout(() => {
        circle.style.transform = 'scale(20)';
        circle.style.opacity = '0';
      }, 20);

      setTimeout(() => { circle.remove(); }, 700);

      /* ================= Cookie Banner ================= */

document.addEventListener("DOMContentLoaded", () => {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("cookie-accept");
  const rejectBtn = document.getElementById("cookie-reject");
  const manageBtn = document.getElementById("cookie-manage");

  // Show only if not previously set
  if (!localStorage.getItem("cookieConsent")) {
    cookieBanner.classList.remove("hidden");
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    cookieBanner.classList.add("hidden");
  });

  rejectBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "rejected");
    cookieBanner.classList.add("hidden");
  });

  manageBtn.addEventListener("click", () => {
    alert("A full cookie-settings panel can be added later if you want!");
  });
});

    });
  });

});

