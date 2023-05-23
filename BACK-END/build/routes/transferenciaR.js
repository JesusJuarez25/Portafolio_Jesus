"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transferenciaC_1 = require("../controllers/transferenciaC");
const router = (0, express_1.Router)();
router.post('/', transferenciaC_1.postTransferencia);
exports.default = router;
