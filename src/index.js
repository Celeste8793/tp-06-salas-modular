const app = require("./app");
const configuracion = require("./configuracion");

app.listen(configuracion.puerto, () => {
  console.log(`Biblioteca disponible en http://localhost:${configuracion.puerto}`);
});
