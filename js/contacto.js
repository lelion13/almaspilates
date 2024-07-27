//envio de correo
const btn = document.getElementById('enviar');

document.getElementById('formulario')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'service_o5e397c';
   const templateID = 'template_gz3479r';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Correo enviado, nos contactaremos a la brevedad!');
      document.getElementById('formulario').reset();
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});

//valido formato de correo

document.getElementById('email').addEventListener('blur', function() {
  var emailField = document.getElementById('email');
  var emailError = document.getElementById('emailError');
  var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

  if (!emailPattern.test(emailField.value)) {
      emailError.style.display = 'inline';
      emailField.style.borderColor = 'red';
      emailField.style.marginBottom = 0;
  } else {
      emailError.style.display = 'none';
      emailField.style.borderColor = 'initial';
      emailField.style.marginBottom = '16px';
  }
});