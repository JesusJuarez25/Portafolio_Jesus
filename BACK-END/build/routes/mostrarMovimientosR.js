"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mostrarMovimientosC_1 = require("../controllers/mostrarMovimientosC");
const router = (0, express_1.Router)();
router.post('/', mostrarMovimientosC_1.getMovimiento);
exports.default = router;
