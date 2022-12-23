const ctrCliente = {};
const cliente = require("../models/cliente");

// Funcion CRUD - POST
ctrCliente.guardar = async(req, res) => {
    await cliente
    .create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

// Funcion CRUD - READ
ctrCliente.listar = async (req,res) => {
    await cliente
    .find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
    //console.log("entro por listar cliente")
}

// Funcion Buscar por ID CRUD - READ
ctrCliente.buscarId = async (req,res) => {
    await cliente
    .findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

// Funcion Buscar por caracter (nombre) CRUD - READ
ctrCliente.buscarNombre = async (req,res) => {
    await cliente
    .find({nombre : RegExp(req.params.nom,"i")})  // el primero debe coinsidir con la definicion de la DB
    // el i es para que ignore mayusculas y minusculas
    .then(data => res.json(data))
    .catch(err => res.json(err))
    //console.log("entro por NOMBRE Cliente")
}

// Funcion actualizar CRUD - Update
ctrCliente.actualizar = async (req,res) => {
    const { _id, ...body } = req.body;   // saque el id, y el resto mandelo a body
    await cliente
    .updateOne({_id : _id}, {$set : body})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

// Funcion Borrar CRUD - Delete
ctrCliente.eliminar = async (req,res) => {
    await cliente
    .deleteOne({_id:req.params.id}) // el _id es el nombre del parametro id que pone mongoose
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

module.exports = ctrCliente;