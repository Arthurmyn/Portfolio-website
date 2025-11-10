(() => {
  const form = document.getElementById('form');
  const fields = form.querySelectorAll('input, textarea');
  const status = document.getElementById('formStatus');

  form.setAttribute('novalidate', '');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      fields.forEach(el => 
        el.classList.toggle('is-invalid', !el.checkValidity()));
      return;
    }

    status.hidden = false;

    try {
      const res = await fetch(form.action, {
        method: 'POST',headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });

      if (res.ok) {
        status.textContent = 'Sent! I will get back to you soon.';
        form.reset();
      } else {
        status.textContent = 'Error sending form.';
      }
    } catch {
      status.textContent = 'Network error. Try again.';
    }
  });
})();