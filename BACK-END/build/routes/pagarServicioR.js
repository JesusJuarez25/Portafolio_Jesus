"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pagarServicioC_1 = require("../controllers/pagarServicioC");
const router = (0, express_1.Router)();
router.post('/', pagarServicioC_1.postPagarServicio);
exports.default = router;
