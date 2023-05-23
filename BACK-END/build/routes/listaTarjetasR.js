"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listaTarjetasC_1 = require("../controllers/listaTarjetasC");
const router = (0, express_1.Router)();
router.get('/', listaTarjetasC_1.getTarjetas);
exports.default = router;
