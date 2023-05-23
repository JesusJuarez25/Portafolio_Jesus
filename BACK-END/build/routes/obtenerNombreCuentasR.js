"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const obtenerNombreCuentasC_1 = require("../controllers/obtenerNombreCuentasC");
const router = (0, express_1.Router)();
router.get('/', obtenerNombreCuentasC_1.getNombreCuentas);
exports.default = router;
