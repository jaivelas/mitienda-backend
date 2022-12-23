const mongoose = require ("mongoose");

const clienteSchema = new mongoose.Schema({
    nombre : { type : String, required: true},
    identificacion : {type : Number, required: true },
    correo : {type : String, required : true},
    celular: {type : String, required : true},
    genero: {type : String, default: "mujer"},
    fechadenacimiento: {type : Date, required : true}

},{
    timestamps : true           //adiciona fecha creaccion y fecha actualizacion
})

module.exports = mongoose.model("cliente", clienteSchema)