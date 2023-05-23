"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const busquedaC_1 = require("../controllers/busquedaC");
const router = (0, express_1.Router)();
router.get('/', busquedaC_1.getCliente);
exports.default = router;
