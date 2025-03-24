// viaje.js

// Arreglo que almacenará los destinos registrados
const destinos = [];

// Función para registrar un destino
const registrarDestino = (destino, fecha, transporte) => {
    destinos.push({ destino, fecha, transporte });
};

// Función para calcular el costo del viaje
const calcularCosto = (transporte) => {
    let costo = 0;
    // Definimos los costos de cada transporte
    switch (transporte) {
        case 'avión':
            costo = 500;
            break;
        case 'tren':
            costo = 150;
            break;
        case 'autobús':
            costo = 100;
            break;
        default:
            costo = 0;
            break;
    }
    return costo;
};

// Función para mostrar el itinerario de viajes
const mostrarItinerario = () => {
    return destinos.map(viaje => {
        return `Destino: ${viaje.destino}, Fecha: ${viaje.fecha}, Transporte: ${viaje.transporte}`;
    }).join("\n");
};
