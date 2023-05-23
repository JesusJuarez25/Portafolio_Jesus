"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mailer_1 = require("../controllers/mailer");
const app = (0, express_1.default)();
app.post('/', mailer_1.mailer);
exports.default = app;
