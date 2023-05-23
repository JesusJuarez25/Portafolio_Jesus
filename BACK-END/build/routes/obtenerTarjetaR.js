"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const obtenerTarjetaC_1 = require("../controllers/obtenerTarjetaC");
const router = (0, express_1.Router)();
router.get('/', obtenerTarjetaC_1.getTarjeta);
exports.default = router;
