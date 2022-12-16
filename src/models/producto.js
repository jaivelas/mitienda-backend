const mongoose = require ("mongoose");

const productoSchema = new mongoose.Schema({
    nombre : { type : String, required: true},
    cantidad : { type : Number, required : true},
    precio : { type : Number, required : true},
    costo : { type : Number, defauly : 0, required : true},
    idCategoria : { type : mongoose.Types.ObjectId, ref:"categoria" ,required : true}, //para hacer la asociacion con la tabla categoria
    imagen : { type : String, required : true}
},{
    timestamps : true           //adiciona fecha creaccion y fecha actualizacion
})

module.exports = mongoose.model("producto", productoSchema)
