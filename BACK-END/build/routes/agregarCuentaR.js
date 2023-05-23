"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const agregarCuentaC_1 = require("../controllers/agregarCuentaC");
const router = (0, express_1.Router)();
router.post('/', agregarCuentaC_1.postAgregarCuenta);
exports.default = router;
