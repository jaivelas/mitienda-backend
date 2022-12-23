const express = require("express");
const router = express.Router();
const ctrFactura = require("../controllers/ctrFactura");

// Definimos el CRUD
router.post("/factura", ctrFactura.guardar); //Create

router.get("/factura", ctrFactura.listar); // Read - buscar todo
router.get("/factura/id/:id", ctrFactura.buscarId); // Read - buscar por id
router.get("/factura/nom/:nom", ctrFactura.buscarNombre); // Read - buscar por nombre

router.put("/factura/", ctrFactura.actualizar);

router.delete("/factura/:id", ctrFactura.eliminar);

module.exports = router;


// despues de creado, lo vinculamos al idex