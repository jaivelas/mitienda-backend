const mongoose = require("mongoose");

mongoose
    .connect("mongodb+srv://jaivelasjev:jaime2022@cluster0.en6v9mz.mongodb.net/mitienda?retryWrites=true&w=majority")      
    // la cadena de conexion a la base de datos
    .then(db => console.log("conecto con la base de datos"))         
    // si la conexion fue satisfactoria
    .catch(err => console.log("fallo con la conexion base de datos" + err))       
    // si la conexion no fue exitosa