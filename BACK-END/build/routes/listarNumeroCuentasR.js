"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listarNumeroCuentasC_1 = require("../controllers/listarNumeroCuentasC");
const router = (0, express_1.Router)();
router.post('/', listarNumeroCuentasC_1.getNumerosCuentas);
exports.default = router;
