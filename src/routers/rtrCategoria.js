const express = require("express");
const router = express.Router();
const ctrCategoria = require("../controllers/ctrCategoria");

//create
//router.post("/categoria", ctrCategoria.guardar);
router.get("/categoria", ctrCategoria.listar);
/* 
router.get("/categoria", ctrCategoria.listar); // Read - buscar todo
router.get("/categoria/id/:id", ctrCategoria.buscarId); // Read - buscar por id
router.get("/categoria/nom/:nom", ctrCategoria.buscarNombre); // Read - buscar por nombre

router.put("/categoria/", ctrCategoria.actualizar);

router.delete("/categoria/:id", ctrCategoria.eliminar);
*/
module.exports = router;