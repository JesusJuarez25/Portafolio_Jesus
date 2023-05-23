"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const obtenerNombreGenerosC_1 = require("../controllers/obtenerNombreGenerosC");
const router = (0, express_1.Router)();
router.get('/', obtenerNombreGenerosC_1.getNombreGeneros);
exports.default = router;
