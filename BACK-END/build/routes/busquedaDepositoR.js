"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const busquedaDepositoC_1 = require("../controllers/busquedaDepositoC");
const router = (0, express_1.Router)();
router.post('/', busquedaDepositoC_1.getCuenta);
exports.default = router;
