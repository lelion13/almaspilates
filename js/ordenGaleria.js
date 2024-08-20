document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container-img');
    const boxes = Array.from(container.children);

    // Función para mezclar un array (algoritmo Fisher-Yates)
    function mezclarArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Mezclar los elementos de .box-img
    mezclarArray(boxes);

    // Limpiar el contenedor y volver a agregar los elementos en el nuevo orden
    container.innerHTML = "";
    boxes.forEach(box => container.appendChild(box));
});
