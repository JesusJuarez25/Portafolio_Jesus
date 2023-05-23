"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asignarCreditoC_1 = require("../controllers/asignarCreditoC");
const router = (0, express_1.Router)();
router.post('/', asignarCreditoC_1.postAsignarCredito);
exports.default = router;
