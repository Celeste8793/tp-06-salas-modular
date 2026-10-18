const { salasPermitidas, turnosPermitidos } = require("../servicios/reservas");

// Identifica la sección de reservas.
function prepararAreaReservas(req, res, next) {
  res.locals.seccion = "Reservas de salas";
  next();
}

// Valida los datos enviados desde el formulario.
function validarReserva(req, res, next) {
  const origen = req.body || {};

  const texto = (valor) => (typeof valor === "string" ? valor.trim() : "");

  const valores = {
    estudiante: texto(origen.estudiante),
    email: texto(origen.email),
    sala: texto(origen.sala),
    fecha: texto(origen.fecha),
    turno: texto(origen.turno),
    personas: texto(origen.personas),
  };

  const personas = Number(valores.personas);

  const valido =
    valores.estudiante !== "" &&
    valores.email !== "" &&
    valores.fecha !== "" &&
    valores.personas !== "" &&
    valores.email.includes("@") &&
    salasPermitidas.includes(valores.sala) &&
    turnosPermitidos.includes(valores.turno) &&
    Number.isInteger(personas) &&
    personas >= 1 &&
    personas <= 6;

  if (!valido) {
    return res.status(400).render("reservas/nueva", {
      titulo: "Corregir reserva",
      salasPermitidas,
      turnosPermitidos,
      valores,
      error:
        "Revisá los datos: completá los campos, usá un email con @, elegí sala y turno válidos e indicá entre 1 y 6 personas.",
    });
  }

  req.reservaValidada = {
    ...valores,
    personas,
  };

  next();
}

module.exports = {
  prepararAreaReservas,
  validarReserva,
};
