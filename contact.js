(() => {
  const form = document.getElementById('form');
  const controls = form.querySelectorAll('.input-control');

  function setInvalid(control, message) {
    control.classList.add('invalid');
    const fb = control.querySelector('.invalid-feedback');
    if (fb) fb.textContent = message;
  }

  function clearInvalid(control) {
    control.classList.remove('invalid');
  }

  function validate() {
    let ok = true;

    controls.forEach(control => {
      clearInvalid(control);
      const input = control.querySelector('input, textarea');
      if (!input) return;

      if (!input.checkValidity()) {
        ok = false;
        if (input.validity.valueMissing) {
          setInvalid(control, 'This field is required.');
        } else if (input.type === 'email' && input.validity.typeMismatch) {
          setInvalid(control, 'Enter a valid email.');
        } else if (input.validity.tooShort) {
          setInvalid(control, `At least ${input.minLength} characters required.`);
        } else {
          setInvalid(control, 'Please fix this field.');
        }
      }
    });

    return ok;
  }

  form.addEventListener('input', e => {
    const control = e.target.closest('.input-control');
    if (control) {
      if (e.target.checkValidity()) clearInvalid(control);
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const ok = validate();
    if (!ok) return;

    document.getElementById('formStatus').hidden = false;
    form.reset();
    controls.forEach(clearInvalid);
  });
})();