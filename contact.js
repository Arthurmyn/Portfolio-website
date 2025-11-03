    (() => {
      const forms = document.querySelectorAll('.needs-validation');

      
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', evt => {
          checkMatch();
          if (!form.checkValidity()) {
            evt.preventDefault();
            evt.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    })();