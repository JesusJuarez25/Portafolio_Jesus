"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const obtenerTiposCuentasC_1 = require("../controllers/obtenerTiposCuentasC");
const router = (0, express_1.Router)();
router.get('/', obtenerTiposCuentasC_1.getTiposCuentas);
exports.default = router;
