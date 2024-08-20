// cards.js

document.addEventListener("DOMContentLoaded", function() {
    const cardsContainer = document.getElementById("cards");

    // Función para crear una tarjeta
    function crearCard(imagenSrc, titulo, descripcion) {
        // Crear un contenedor para la tarjeta
        const card = document.createElement("div");

        // Crear la imagen
        const img = document.createElement("img");
        img.src = imagenSrc;
        img.alt = `Imagen de ${titulo}`;
        img.classList.add("cards-img");

        // Crear el título
        const h2 = document.createElement("h2");
        h2.textContent = titulo;

        // Crear la descripción
        const p = document.createElement("p");
        p.textContent = descripcion;

        // Añadir imagen, título y descripción al contenedor de la tarjeta
        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(p);

        // Mostrar por consola valores del formulario
        console.log({
        imagen:img,
        titulo:h2,
        descripcion:p
        });

        // Añadir la tarjeta al contenedor de tarjetas
        cardsContainer.appendChild(card);
    }
    // crearCard("./img/nuevaImagen.jpg", "Nuevo Servicio", "Descripción del nuevo servicio.");
    document.getElementById('addCardBtn').addEventListener('click', function(event) {
        event.preventDefault();
        // alert("hola");
        
    const nombreInput = document.getElementById("nombre");
    const descripcionInput = document.getElementById("descripcion");
    const nombre = nombreInput.value.trim();
    const descripcion = descripcionInput.value.trim();
    const urlCard = document.getElementById("urlCard").value || "https://picsum.photos/200";

    let hasError = false;

    // Validar el campo nombre
    if (nombre === '') {
        nombreInput.classList.add('input-error');
        hasError = true;
    } else {
        nombreInput.classList.remove('input-error');
    }

    // Validar el campo descripcion
    if (descripcion === '') {
        descripcionInput.classList.add('input-error');
        hasError = true;
    } else {
        descripcionInput.classList.remove('input-error');
    }

    if (hasError) {
        Swal.fire({
            icon: 'warning',
            title: 'Campos vacíos',
            text: 'Debes completar ambos campos para crear un nuevo servicio.',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#bd7cd1'
        });
        if (nombre === '') {
            nombreInput.focus();
        } else {
            descripcionInput.focus();
        }
        return;
    }
        crearCard(urlCard, nombre, descripcion);
    });

    //modificar borde de los divs que contienen las cards
    document.getElementById('modificarCardBtn').addEventListener('click', function(event) {
        event.preventDefault();
        const bordeColor = document.getElementById("bordeColor").value;
        const bordeAncho = document.getElementById("bordeAncho").value + "px";
    // Mostrar por consola valores del formulario
    console.log({
        bordeColor:bordeColor,
        bordeAncho:bordeAncho,
        });
        const cards = document.querySelectorAll("#cards div");
        cards.forEach(card => {
            card.style.border = `${bordeAncho} solid ${bordeColor}`;
        });
    });
});

// document.addEventListener("DOMContentLoaded", function() {
//     const submenuToggle = document.querySelector("li.has-submenu > a");

//     submenuToggle.addEventListener("click", function(event) {
//         event.preventDefault();  // Evita la redirección
//         this.parentElement.classList.toggle("active");
//     });
// });

