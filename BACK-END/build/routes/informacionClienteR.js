"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const informacionClienteC_1 = require("../controllers/informacionClienteC");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', informacionClienteC_1.informacionCliente);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
