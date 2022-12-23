require('dotenv').config();
require("./database");              // DEFINLE LA CONEXION ALA BASE DE DATOS
const express = require ("express"); // cargamos la libreria express y al llamamos express.
const app = express(); // asigno el nombre app framework para facilitar el manejo
const cors = require("cors");   // carlo el CORS
const PORT = 5000;  // asignamos un puerto para escuchar

//const producto = require("./models/producto");  // se puso provisional para verificar la coenxion a la Base de datos
//const categoria = require("./models/categoria");

// Configuraciones para trabajar peticiones HTTP post, get, delete, put
app.use(cors()),        //definimos que vamos a usar cors
app.use(express.json()) // definimos que vamos a usar el formato json

// definimos rutas.
app.use("/",require("./routers/rtrCliente"));
app.use("/",require("./routers/rtrProducto"));
app.use("/",require("./routers/rtrCategoria"));
app.use("/",require("./routers/rtrComentario"));
app.use("/",require("./routers/rtrFactura"));

app.listen(PORT, (req,res) =>{   // Inicio la escucha y respuesta en el puerto
    console.log("servidor en linea en el puerto: ",PORT)
});

// estas se usador provisional para ver funcionalidades antes de ocnectar a la DB
//app.use("/manualidades", (req, res) =>{
//    res.send("Hola manualidades")
//});

//let nombre = "jaime";
//app.use("/retablos/:nombre", (req, res) =>{
//    const nombre = req.params.nombre
//    res.send("Hola manualidades en retablos" +nombre)
//});

//app.use("/retablos/:num", (req, res) =>{
//    const num = req.params.num
//    res.send("Hola manualidades en retablos" +parseInt(num) + 10)
//});





