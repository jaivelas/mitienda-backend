const ctrCategoria = {};
const categoria = require("../models/categoria");

// Funcion CRUD - POST
ctrCategoria.guardar = async(req, res) => {
    await categoria
    .create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

// Funcion CRUD - READ
ctrCategoria.listar = async (req,res) => {
    await categoria
    .find()
    .then(data => res.json(data))
    .catch(err => res.json(err))
    console.log("entro por listar categoria")
}

// Funcion Buscar por ID CRUD - READ
ctrCategoria.buscarId = async (req,res) => {
    await categoria
    .findById(req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

// Funcion Buscar por caracter (nombre) CRUD - READ
ctrCategoria.buscarNombre = async (req,res) => {
    await categoria
    .find({nombre : RegExp(req.params.nom,"i")})  // el primero debe coinsidir con la definicion de la DB
    // el i es para que ignore mayusculas y minusculas
    .then(data => res.json(data))
    .catch(err => res.json(err))
    console.log("entro por NOMBRE Categoria")
}

// Funcion actualizar CRUD - Update
ctrCategoria.actualizar = async (req,res) => {
    const { _id, ...body } = req.body;   // saque el id, y el resto mandelo a body
    await categoria
    .updateOne({_id : _id}, {$set : body})
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

// Funcion Borrar CRUD - Delete
ctrCategoria.eliminar = async (req,res) => {
    await categoria
    .deleteOne({_id:req.params.id}) // el _id es el nombre del parametro id que pone mongoose
    .then(data => res.json(data))
    .catch(err => res.json(err))
}