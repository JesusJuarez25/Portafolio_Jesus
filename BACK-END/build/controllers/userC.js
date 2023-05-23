"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUser = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const newUser = async (req, res) => {
    const { ROL_ID, ID_USUARIO, USUARIO, CONTRASEÑA, NOMBRE } = req.body;
    const hashedPassword = await bcrypt_1.default.hash(CONTRASEÑA, 10);
    const incercion = await database_1.default.query('INSERT INTO usuario set ?', { ROL_ID: ROL_ID, ID_USUARIO: ID_USUARIO, USUARIO: USUARIO, CONTRASEÑA: hashedPassword, NOMBRE: NOMBRE });
    res.json(incercion);
    //REALIZAR EL MANEJO DE ERRORES
};
exports.newUser = newUser;
