"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fbancaeC_1 = require("../controllers/fbancaeC");
const router = (0, express_1.Router)();
router.post('/', fbancaeC_1.fbancaeC);
exports.default = router;
