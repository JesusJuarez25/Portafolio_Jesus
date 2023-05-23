"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const obtenerComprobantesDomicilioC_1 = require("../controllers/obtenerComprobantesDomicilioC");
const router = (0, express_1.Router)();
router.get('/', obtenerComprobantesDomicilioC_1.getComprobantesDomiclio);
exports.default = router;
