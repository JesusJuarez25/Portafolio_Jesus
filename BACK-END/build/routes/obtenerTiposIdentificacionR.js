"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const obtenerTiposIdentificacionC_1 = require("../controllers/obtenerTiposIdentificacionC");
const router = (0, express_1.Router)();
router.get('/', obtenerTiposIdentificacionC_1.getTiposIdentificacion);
exports.default = router;
