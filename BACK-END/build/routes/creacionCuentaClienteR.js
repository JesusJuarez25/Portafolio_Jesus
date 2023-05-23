"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const creacionCuentaClienteC_1 = require("../controllers/creacionCuentaClienteC");
const router = (0, express_1.Router)();
router.post('/', creacionCuentaClienteC_1.postCuentaCliente);
exports.default = router;
