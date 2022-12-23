const express = require("express");
const router = express.Router();
const ctrCategoria = require("../controllers/ctrCategoria");

//create Definimos el CRUD
router.post("/categoria", ctrCategoria.guardar);  // Crear

router.get("/categoria", ctrCategoria.listar);  // read - Buscar Todo
router.get("/categoria/id/:id", ctrCategoria.buscarId); // Read - buscar por id
router.get("/categoria/nom/:nom", ctrCategoria.buscarNombre); // Read - buscar por nombre

router.put("/categoria/", ctrCategoria.actualizar);

router.delete("/categoria/:id", ctrCategoria.eliminar);

module.exports = router;