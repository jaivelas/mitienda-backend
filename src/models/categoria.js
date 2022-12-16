const mongoose = require ("mongoose");

const categoriaSchema = new mongoose.Schema({
    nombre : { type : String, required: true},
    tipo : {type : String, required: true },
    imagen : {type : String, required : true}
},{
    timestamps : true           //adiciona fecha creaccion y fecha actualizacion
})

module.exports = mongoose.model("categoria", categoriaSchema)