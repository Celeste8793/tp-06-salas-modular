let contadorSolicitudes = 0;

// Asigna un identificador único y consecutivo a cada solicitud.
function identificarSolicitud(req, res, next) {
  contadorSolicitudes += 1;

  res.locals.solicitudId = `BIB-${String(contadorSolicitudes).padStart(4, "0")}`;

  next();
}

// Calcula cuánto tarda el servidor en responder.
function medirDuracion(req, res, next) {
  const inicio = process.hrtime.bigint();

  res.on("finish", () => {
    const milisegundos = Number(process.hrtime.bigint() - inicio) / 1_000_000;

    console.log(
      `[${res.locals.solicitudId}] ${req.method} ${req.originalUrl} ${res.statusCode} ${milisegundos.toFixed(2)} ms`,
    );
  });

  next();
}

module.exports = {
  identificarSolicitud,
  medirDuracion,
};
