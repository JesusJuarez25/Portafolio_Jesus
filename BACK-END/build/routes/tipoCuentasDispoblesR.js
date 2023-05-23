"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoCuentasDispoblesC_1 = require("../controllers/tipoCuentasDispoblesC");
const router = (0, express_1.Router)();
router.post('/', tipoCuentasDispoblesC_1.getTiposCuentasDisponibles);
exports.default = router;
