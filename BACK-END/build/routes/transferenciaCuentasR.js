"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transferenciaCuentasC_1 = require("../controllers/transferenciaCuentasC");
const router = (0, express_1.Router)();
router.post('/', transferenciaCuentasC_1.postTransferenciaCuentas);
exports.default = router;
