"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apagarCuentaC_1 = require("../controllers/apagarCuentaC");
const router = (0, express_1.Router)();
router.post('/', apagarCuentaC_1.apagarCuenta);
exports.default = router;
