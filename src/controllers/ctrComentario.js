const ctrComentario = {};
const comentario = require("../models/comentario");

// Funcion CRUD - POST
ctrComentario.guardar = async(req, res) => {
    await comentario
    .create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

// Funcion CRUD - READ
ctrComentario.listar = async (req,res) => {
    await comentario
    .find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
    //console.log("entro por listar comentario")
}

// Funcion Buscar por ID CRUD - READ
ctrComentario.buscarId = async (req,res) => {
    await comentario
    .findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

// Funcion Buscar por caracter (nombre) CRUD - READ
ctrComentario.buscarNombre = async (req,res) => {
    await comentario
    .find({idCliente : RegExp(req.params.nom,"i")})  // el primero debe coinsidir con la definicion de la DB
    // el i es para que ignore mayusculas y minusculas
    .then(data => res.json(data))
    .catch(err => res.json(err))
    //console.log("entro por NOMBRE comentario")
}

// Funcion actualizar CRUD - Update
ctrComentario.actualizar = async (req,res) => {
    const { _id, ...body } = req.body;   // saque el id, y el resto mandelo a body
    await comentario
    .updateOne({_id : _id}, {$set : body})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

// Funcion Borrar CRUD - Delete
ctrComentario.eliminar = async (req,res) => {
    await comentario
    .deleteOne({_id:req.params.id}) // el _id es el nombre del parametro id que pone mongoose
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

module.exports = ctrComentario