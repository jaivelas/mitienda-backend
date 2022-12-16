const express = require("express");
const router = express.Router();
const ctrProducto = require("../controllers/ctrProducto");

// Definimos el CRUD
router.post("/producto", ctrProducto.guardar); //Create

router.get("/producto", ctrProducto.listar); // Read - buscar todo
router.get("/producto/id/:id", ctrProducto.buscarId); // Read - buscar por id
router.get("/producto/nom/:nom", ctrProducto.buscarNombre); // Read - buscar por nombre

router.put("/producto/", ctrProducto.actualizar);

router.delete("/producto/:id", ctrProducto.eliminar);

module.exports = router;


// despues de creado, lo vinculamos al idex
