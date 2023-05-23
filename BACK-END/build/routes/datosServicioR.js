"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const datosServicioC_1 = require("../controllers/datosServicioC");
const router = (0, express_1.Router)();
router.get('/', datosServicioC_1.getServicio);
exports.default = router;
