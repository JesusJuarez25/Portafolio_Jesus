"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userC_1 = require("../controllers/userC");
const router = (0, express_1.Router)();
router.post('/', userC_1.newUser);
exports.default = router;
