"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const obtenerFoliosDisponiblesC_1 = require("../controllers/obtenerFoliosDisponiblesC");
const router = (0, express_1.Router)();
router.get('/', obtenerFoliosDisponiblesC_1.getFoliosDisponibles);
exports.default = router;
