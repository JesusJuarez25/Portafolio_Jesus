"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AutenticacionController {
    index(req, res) {
        res.json('usuario');
    }
}
const autenticacionController = new AutenticacionController();
exports.default = autenticacionController;
