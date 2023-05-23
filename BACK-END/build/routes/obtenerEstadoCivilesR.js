"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const obtenerEstadoCivilesC_1 = require("../controllers/obtenerEstadoCivilesC");
const router = (0, express_1.Router)();
router.get('/', obtenerEstadoCivilesC_1.getEstadosCivil);
exports.default = router;
