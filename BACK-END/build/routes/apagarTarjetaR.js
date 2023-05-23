"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const apagarTarjetaC_1 = require("../controllers/apagarTarjetaC");
const router = (0, express_1.Router)();
router.post('/', apagarTarjetaC_1.apagarTarjeta);
exports.default = router;
