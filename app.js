// app.js

// Función que maneja el formulario de registro de destinos
document.getElementById('formDestino').addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que se recargue la página

    const destino = document.getElementById('destino').value;
    const fecha = document.getElementById('fecha').value;
    const transporte = document.getElementById('transporte').value;

    // Llamamos a la función para registrar el destino
    registrarDestino(destino, fecha, transporte);

    // Limpiamos el formulario
    document.getElementById('formDestino').reset();

    // Actualizamos el itinerario en el HTML
    document.getElementById('itinerario').innerHTML = mostrarItinerario().split("\n").map(item => `<li>${item}</li>`).join("");
});

// Función para calcular el costo total de los viajes registrados
document.getElementById('calcularCosto').addEventListener('click', () => {
    let total = 0;
    destinos.forEach(viaje => {
        total += calcularCosto(viaje.transporte);
    });
    document.getElementById('costoTotal').innerText = `Costo Total: $${total}`;
});
