const mongoose = require ("mongoose");

const facturaSchema = new mongoose.Schema({
    numero : { type : Number, required: true},
    fecha : { type : Date, required : true},
    idCliente : { type : Number, required : true},
    total : { type : Number, defauly : 0, required : true},
    observacion : { type : String, required : true}, //para hacer la asociacion con la tabla categoria
    direccion : { type : String, required : true}
},{
    timestamps : true           //adiciona fecha creaccion y fecha actualizacion
})

module.exports = mongoose.model("factura", facturaSchema)