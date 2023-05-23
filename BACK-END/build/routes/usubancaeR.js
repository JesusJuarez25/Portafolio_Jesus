"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usubancaeC_1 = require("../controllers/usubancaeC");
const router = (0, express_1.Router)();
router.post('/', usubancaeC_1.usubancaeC);
exports.default = router;
