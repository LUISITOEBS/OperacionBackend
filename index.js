const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();

console.log( process.env );
//Crear el servidor de express
const app = express();

//DATABASE
dbConnection();

//CORS
app.use(cors());

//Directorio Público
app.use( express.static('public') );

//Lectura y Parseo del Body
app.use( express.json() );

//Rutas
app.use( '/api', require('./routes/aplicacion') );

//Escuchar peticiones
app.listen( process.env.PORT , () => {
   console.log(`Servidor en funcionamiento, Puerto: ${ process.env.PORT }`);
});