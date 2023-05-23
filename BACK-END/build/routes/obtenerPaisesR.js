"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const obtenerPaisesC_1 = require("../controllers/obtenerPaisesC");
const router = (0, express_1.Router)();
router.get('/', obtenerPaisesC_1.getPaises);
exports.default = router;
