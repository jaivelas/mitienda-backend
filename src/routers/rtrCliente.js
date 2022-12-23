const express = require("express");
const router = express.Router();
const ctrCliente = require("../controllers/ctrCliente");

// Definimos el CRUD
router.post("/cliente", ctrCliente.guardar); //Create

router.get("/cliente", ctrCliente.listar); // Read - buscar todo
router.get("/cliente/id/:id", ctrCliente.buscarId); // Read - buscar por id
router.get("/cliente/nom/:nom", ctrCliente.buscarNombre); // Read - buscar por nombre

router.put("/cliente/", ctrCliente.actualizar);

router.delete("/cliente/:id", ctrCliente.eliminar);

module.exports = router;