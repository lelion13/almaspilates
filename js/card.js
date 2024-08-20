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

        // Añadir la tarjeta al contenedor de tarjetas
        cardsContainer.appendChild(card);
    }

    // crearCard("./img/nuevaImagen.jpg", "Nuevo Servicio", "Descripción del nuevo servicio.");
    document.getElementById('addCardBtn').addEventListener('click', function(event) {
        event.preventDefault();
        // alert("hola");
        
        const nombre = document.getElementById("nombre").value.trim();
        const descripcion = document.getElementById("descripcion").value.trim();
        const urlCard = document.getElementById("urlCard").value || "https://picsum.photos/200";
        console.log("Nombre:", nombre);
        console.log("Descripción:", descripcion);       
        if (nombre === '' || descripcion=== '') {
            Swal.fire({
                icon: 'warning',
                title: 'Campo vacío',
                text: 'Debes colocar un titulo y descripcion para poder crear un nuevo servicio!',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#bd7cd1'
                // customClass: {
                //     confirmButton: 'custom-button'  // Clase personalizada para el botón
                //   }
            }).then(() => {
                // Si el campo "nombre" está vacío, enfoca en él. De lo contrario, enfoca en "descripcion".
                if (nombre === '') {
                    document.getElementById('nombre').focus();
                } else if (descripcion === '') {
                    document.getElementById('descripcion').focus();
                }
            });
            // document.getElementById('nombre').focus();
            return;
        }
        
        crearCard(urlCard, nombre, descripcion);
    });

//modificar borde de los divs que contienen las cards
    document.getElementById('modificarCardBtn').addEventListener('click', function(event) {
        event.preventDefault();
        const bordeColor = document.getElementById("bordeColor").value;
        const bordeAncho = document.getElementById("bordeAncho").value + "px";

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

