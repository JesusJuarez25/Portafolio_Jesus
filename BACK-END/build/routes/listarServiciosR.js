"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listarServiciosC_1 = require("../controllers/listarServiciosC");
const router = (0, express_1.Router)();
router.get('/', listarServiciosC_1.getServicios);
exports.default = router;
