const salasPermitidas = ["Sala Norte", "Sala Sur", "Sala Multimedia"];

const turnosPermitidos = ["Mañana", "Tarde", "Noche"];

// Datos iniciales: se restauran al reiniciar el servidor.
const reservas = [
  {
    id: 1,
    estudiante: "Lucía Herrera",
    email: "lucia@example.com",
    sala: "Sala Norte",
    fecha: "2026-10-19",
    turno: "Mañana",
    personas: 2,
  },
  {
    id: 2,
    estudiante: "Tomás Medina",
    email: "tomas@example.com",
    sala: "Sala Sur",
    fecha: "2026-10-20",
    turno: "Tarde",
    personas: 4,
  },
  {
    id: 3,
    estudiante: "Valentina Cruz",
    email: "valentina@example.com",
    sala: "Sala Multimedia",
    fecha: "2026-10-21",
    turno: "Noche",
    personas: 3,
  },
  {
    id: 4,
    estudiante: "Mateo Ríos",
    email: "mateo@example.com",
    sala: "Sala Norte",
    fecha: "2026-10-22",
    turno: "Tarde",
    personas: 1,
  },
];

let siguienteId = 5;

function listarReservas() {
  return reservas;
}

function contarReservas() {
  return reservas.length;
}

function buscarReservaPorId(id) {
  return reservas.find((reserva) => reserva.id === id);
}

function agregarReserva(datos) {
  const reserva = {
    id: siguienteId++,
    ...datos,
  };

  reservas.push(reserva);
  return reserva;
}

module.exports = {
  salasPermitidas,
  turnosPermitidos,
  listarReservas,
  contarReservas,
  buscarReservaPorId,
  agregarReserva,
};
