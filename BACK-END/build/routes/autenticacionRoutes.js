"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autenticacionController_1 = __importDefault(require("../controllers/autenticacionController"));
const validate_token_1 = __importDefault(require("./validate-token"));
class AutenticacionRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', validate_token_1.default, autenticacionController_1.default.index);
    }
}
const autenticacionRoutes = new AutenticacionRoutes();
exports.default = autenticacionRoutes.router;
