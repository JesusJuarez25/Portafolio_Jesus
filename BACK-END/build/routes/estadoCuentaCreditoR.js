"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estadoCuentaCreditoC_1 = require("../controllers/estadoCuentaCreditoC");
const router = (0, express_1.Router)();
router.post('/', estadoCuentaCreditoC_1.estadoCuentaCredito);
exports.default = router;
