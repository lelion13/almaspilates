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

//valido formato del nombre

document.getElementById('name').addEventListener('blur', function() {
  var nameField = document.getElementById('name');
  var nameError = document.getElementById('nameError');
  var namePattern = /^[A-Za-z]$/i;

  if (!namePattern.test(nameField.value)) {
      nameError.style.display = 'inline';
      nameField.style.borderColor = 'red';
      nameField.style.marginBottom = 0;
  } else {
      nameError.style.display = 'none';
      nameField.style.borderColor = 'initial';
      nameField.style.marginBottom = '16px';
  }
});

//valido formato de apellido

document.getElementById('surname').addEventListener('blur', function() {
  var surnameField = document.getElementById('surname');
  var surnameError = document.getElementById('surnameError');
  var surnamePattern = /^[A-Za-z]$/i;

  if (!surnamePattern.test(surnameField.value)) {
      surnameError.style.display = 'inline';
      surnameField.style.borderColor = 'red';
      surnameField.style.marginBottom = 0;
  } else {
      surnameError.style.display = 'none';
      surnameField.style.borderColor = 'initial';
      surnameField.style.marginBottom = '16px';
  }
});

//Limpio los label de error!
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("formulario");
  const resetButton = document.getElementById("cancelar");

  resetButton.addEventListener("click", function(event) {
      // Ocultar mensajes de error

      const inputs = form.querySelectorAll("input, textarea, select");
                inputs.forEach(input => {
                    input.style.borderColor = '#ccc';
                    input.style.marginBottom = '16px'; // Restablecer el margen inferior si se cambió
                });
      document.getElementById("nameError").style.display = "none";
      document.getElementById("surnameError").style.display = "none";
      document.getElementById("emailError").style.display = "none";
      
      // Si deseas realizar otras acciones, puedes agregarlas aquí
  });
});