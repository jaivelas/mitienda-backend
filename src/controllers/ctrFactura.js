const ctrFactura = {};
const factura = require("../models/factura");

// Funcion CRUD - POST
ctrFactura.guardar = async(req, res) => {
    await factura
    .create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

// Funcion CRUD - READ
ctrFactura.listar = async (req,res) => {
    await factura
    .find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
    //console.log("entro por listar Factura")
}

// Funcion Buscar por ID CRUD - READ
ctrFactura.buscarId = async (req,res) => {
    await factura
    .findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

// Funcion Buscar por caracter (nombre) CRUD - READ
ctrFactura.buscarNombre = async (req,res) => {
    await factura
    .find({nombre : RegExp(req.params.nom,"i")})  // el primero debe coinsidir con la definicion de la DB
    // el i es para que ignore mayusculas y minusculas
    .then(data => res.json(data))
    .catch(err => res.json(err))
    //console.log("entro por NOMBRE factura")
}

// Funcion actualizar CRUD - Update
ctrFactura.actualizar = async (req,res) => {
    const { _id, ...body } = req.body;   // saque el id, y el resto mandelo a body
    await factura
    .updateOne({_id : _id}, {$set : body})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

// Funcion Borrar CRUD - Delete
ctrFactura.eliminar = async (req,res) => {
    await factura
    .deleteOne({_id:req.params.id}) // el _id es el nombre del parametro id que pone mongoose
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

module.exports = ctrFactura