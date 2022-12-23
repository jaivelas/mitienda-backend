const mongoose = require ("mongoose");

const comentarioSchema = new mongoose.Schema({
    idCliente : { type : String, required: true},
    idProducto : {type : String, required: true },
    calificacion : {type : Number, required : true},
    comentario: {type : String, required : true},
    fecha: {type : Date, required : true},
    numero :{type : Number, required : true}

},{
    timestamps : true           //adiciona fecha creaccion y fecha actualizacion
})

module.exports = mongoose.model("comentario", comentarioSchema)