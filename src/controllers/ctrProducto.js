const ctrProducto = {};
const producto = require("../models/producto");

// Funcion CRUD - POST
ctrProducto.guardar = async(req, res) => {
    await producto
    .create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

// Funcion CRUD - READ
ctrProducto.listar = async (req,res) => {
    await producto
    .find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
    //console.log("entro por listar Producto")
}

// Funcion Buscar por ID CRUD - READ
ctrProducto.buscarId = async (req,res) => {
    await producto
    .findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

// Funcion Buscar por caracter (nombre) CRUD - READ
ctrProducto.buscarNombre = async (req,res) => {
    await producto
    .find({nombre : RegExp(req.params.nom,"i")})  // el primero debe coinsidir con la definicion de la DB
    // el i es para que ignore mayusculas y minusculas
    .then(data => res.json(data))
    .catch(err => res.json(err))
    //console.log("entro por NOMBRE producto")
}

// Funcion actualizar CRUD - Update
ctrProducto.actualizar = async (req,res) => {
    const { _id, ...body } = req.body;   // saque el id, y el resto mandelo a body
    await producto
    .updateOne({_id : _id}, {$set : body})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

// Funcion Borrar CRUD - Delete
ctrProducto.eliminar = async (req,res) => {
    await producto
    .deleteOne({_id:req.params.id}) // el _id es el nombre del parametro id que pone mongoose
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

module.exports = ctrProducto