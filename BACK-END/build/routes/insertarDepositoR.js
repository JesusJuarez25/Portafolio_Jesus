"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const insertarDepositoC_1 = require("../controllers/insertarDepositoC");
const router = (0, express_1.Router)();
router.post('/', insertarDepositoC_1.insertarDeposito);
exports.default = router;
