const express = require("express");
const path = require("node:path");
const morgan = require("morgan");
const expressLayouts = require("express-ejs-layouts");

const configuracion = require("./configuracion");
const servicioReservas = require("./servicios/reservas");
const reservasRouter = require("./rutas/reservas");

const { identificarSolicitud, medirDuracion } = require("./middleware/solicitudes");

const app = express();

// Configuración de las vistas.
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "..", "views"));
app.set("layout", "layouts/main");

// Registro de solicitudes según el entorno.
app.use(morgan(configuracion.entorno === "production" ? "combined" : "dev"));

// Middleware globales.
app.use(identificarSolicitud);
app.use(medirDuracion);

// Layout, archivos estáticos y lectura de formularios.
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Página principal.
app.get("/", (req, res) => {
  res.render("inicio", {
    titulo: "Inicio | Biblioteca",
    cantidad: servicioReservas.contarReservas(),
  });
});

// Estado del servidor.
app.get("/estado", (req, res) => {
  res.json({
    servicio: "activo",
    reservas: servicioReservas.contarReservas(),
    solicitudId: res.locals.solicitudId,
  });
});

// Rutas de reservas.
app.use("/reservas", reservasRouter);

// Página 404 para direcciones inexistentes.
app.use((req, res) => {
  res.status(404).render("no-encontrado", {
    titulo: "Página no encontrada",
    mensaje: "La dirección solicitada no existe.",
  });
});

module.exports = app;
