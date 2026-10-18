const obtenerPuerto = () => {
  const valor = process.env.PORT ?? "3000";
  const puerto = Number(valor);

  if (!Number.isInteger(puerto) || puerto < 1 || puerto > 65535) {
    throw new Error("PORT debe ser un número entero entre 1 y 65535");
  }

  return puerto;
};

const configuracion = {
  puerto: obtenerPuerto(),
  entorno: process.env.NODE_ENV || "development",
};

module.exports = configuracion;
