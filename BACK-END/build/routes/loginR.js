"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginC_1 = require("../controllers/loginC");
const router = (0, express_1.Router)();
router.post('/', loginC_1.loginUser);
exports.default = router;
