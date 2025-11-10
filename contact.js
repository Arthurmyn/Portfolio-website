(() => {
  const form = document.getElementById('form');
  const fields = form.querySelectorAll('input, textarea');
  const status = document.getElementById('formStatus');

  form.setAttribute('novalidate', '');

  fields.forEach(el => {
    const saved = localStorage.getItem(`contactForm_${el.name}`);
    if (saved) el.value = saved;

    el.addEventListener('input', () => {
      el.classList.toggle('is-invalid', !el.checkValidity());
      localStorage.setItem(`contactForm_${el.name}`, el.value);
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      fields.forEach(el => el.classList.toggle('is-invalid', !el.checkValidity()));
      return;
    }

    status.hidden = false;
    status.textContent = 'Sending...';

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });

      if (res.ok) {
        fields.forEach(el => localStorage.removeItem(`contactForm_${el.name}`));
        status.textContent = 'Sent! I’ll get back to you soon.';
        form.reset();
      } else {
        status.textContent = 'Error sending form.';
      }
    } catch {
      status.textContent = 'Network error. Try again.';
    } finally {
      setTimeout(() => (status.hidden = true), 4000);
    }
  });
})();