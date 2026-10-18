const express = require("express");

const controlador = require("../controladores/reservas");

const { prepararAreaReservas, validarReserva } = require("../middleware/reservas");

const router = express.Router();

// Middleware que identifica la sección de reservas.
router.use(prepararAreaReservas);

// Muestra el listado de reservas.
router.get("/", controlador.listar);

// Muestra el formulario de nueva reserva.
// Debe estar antes de /:id.
router.get("/nueva", controlador.mostrarFormulario);

// Muestra el detalle de una reserva.
router.get("/:id", controlador.mostrarDetalle);

// Valida y guarda una nueva reserva.
router.post("/", validarReserva, controlador.crear);

module.exports = router;
