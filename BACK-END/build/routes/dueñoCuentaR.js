"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const due_oCuentaC_1 = require("../controllers/due\u00F1oCuentaC");
const router = (0, express_1.Router)();
router.post('/', due_oCuentaC_1.getDueñoCuenta);
exports.default = router;
