"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const buroCreditoC_1 = require("../controllers/buroCreditoC");
const router = (0, express_1.Router)();
router.post('/', buroCreditoC_1.postBuroCredito);
exports.default = router;
