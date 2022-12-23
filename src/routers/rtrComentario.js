const express = require("express");
const router = express.Router();
const ctrComentario = require("../controllers/ctrComentario");

// Definimos el CRUD
router.post("/comentario", ctrComentario.guardar); //Create

router.get("/comentario", ctrComentario.listar); // Read - buscar todo
router.get("/comentario/id/:id", ctrComentario.buscarId); // Read - buscar por id
router.get("/comentario/nom/:nom", ctrComentario.buscarNombre); // Read - buscar por nombre

router.put("/comentario/", ctrComentario.actualizar);

router.delete("/comentario/:id", ctrComentario.eliminar);

module.exports = router;


// despues de creado, lo vinculamos al idex