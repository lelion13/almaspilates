
// Esto lo copie desde el template de emailjs
// emailjs.send("service_o5e397c","template_gz3479r",{
//     to_name: "lelion13@gmail.com",
//     from_name: "llion@cpmgsa.ar",
//     message: "hola",
//     reply_to: "lelion_13@hotmail.com",
//     });

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