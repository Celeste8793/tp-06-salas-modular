
# TP06 - Refactorización modular de reservas de salas

## Descripción

Aplicación web desarrollada con Node.js, Express y EJS para gestionar reservas temporales de salas de estudio.

Este trabajo práctico continúa el TP05 y reorganiza su código en módulos, separando las rutas, los controladores, los servicios y los middleware.

## Tecnologías utilizadas

- Node.js
- Express
- EJS
- express-ejs-layouts
- Morgan
- ESLint
- Prettier

## Estructura del proyecto

src/
  app.js
  index.js
  configuracion.js
  controladores/
    reservas.js
  middleware/
    reservas.js
    solicitudes.js
  rutas/
    reservas.js
  servicios/
    reservas.js

views/
public/

## Instalación

1. Descargar o clonar el repositorio.
2. Abrir una terminal en la carpeta del proyecto.
3. Instalar las dependencias:

   npm install

4. Iniciar el servidor:

   npm start

5. Abrir en el navegador:

   http://localhost:3000

## Funcionalidades

- Visualizar las reservas existentes.
- Registrar nuevas reservas.
- Validar los datos ingresados.
- Consultar una reserva por su identificador.
- Mostrar mensajes de error cuando corresponde.
- Consultar el estado del servidor.
- Registrar solicitudes HTTP mediante Morgan.

## Organización modular

- Rutas: definen las direcciones de la aplicación.
- Controladores: reciben las solicitudes y preparan las respuestas.
- Servicios: gestionan los datos de las reservas.
- Middleware: realizan validaciones y procesan solicitudes.
- Configuración: centraliza los valores utilizados por la aplicación.

## Comandos disponibles

npm start
npm run format
npm run lint
npm run check

## Variables de entorno

PORT=3000
NODE_ENV=development

El archivo .env.example contiene los valores de ejemplo.

## Persistencia

Las reservas se almacenan temporalmente en memoria. Al reiniciar el servidor, se recuperan los datos iniciales y se pierden las reservas agregadas durante la ejecución.

## Pruebas realizadas

- Inicio de la aplicación.
- Listado de reservas.
- Registro válido de una reserva.
- Validación de datos incorrectos.
- Consulta de una reserva inexistente.
- Revisión del código con ESLint.
- Verificación del formato con Prettier.
