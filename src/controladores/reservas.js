const servicioReservas = require("../servicios/reservas");

// Muestra todas las reservas.
function listar(req, res) {
  res.render("reservas/lista", {
    titulo: "Listado de reservas",
    reservas: servicioReservas.listarReservas(),
  });
}

// Muestra el formulario para crear una reserva.
function mostrarFormulario(req, res) {
  res.render("reservas/nueva", {
    titulo: "Nueva reserva",
    salasPermitidas: servicioReservas.salasPermitidas,
    turnosPermitidos: servicioReservas.turnosPermitidos,
    valores: {},
    error: null,
  });
}

// Muestra el detalle de una reserva.
function mostrarDetalle(req, res) {
  const id = Number(req.params.id);
  const reserva = servicioReservas.buscarReservaPorId(id);

  if (!reserva) {
    return res.status(404).render("no-encontrado", {
      titulo: "Reserva no encontrada",
      mensaje: "La reserva solicitada no existe.",
    });
  }

  res.render("reservas/detalle", {
    titulo: `Reserva #${reserva.id}`,
    reserva,
  });
}

// Guarda una reserva que ya pasó por la validación.
function crear(req, res) {
  servicioReservas.agregarReserva(req.reservaValidada);

  res.redirect("/reservas");
}

module.exports = {
  listar,
  mostrarFormulario,
  mostrarDetalle,
  crear,
};
