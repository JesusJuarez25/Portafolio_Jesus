"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transferenciaSpeiC_1 = require("../controllers/transferenciaSpeiC");
const router = (0, express_1.Router)();
router.post('/', transferenciaSpeiC_1.postTransferenciaSpei);
exports.default = router;
