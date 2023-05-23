"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDueñoCuenta = void 0;
const database_1 = __importDefault(require("../database"));
async function getDueñoCuenta(req, res) {
    const conn = await database_1.default;
    const { cuenta_destino } = req.body;
    console.log(cuenta_destino);
    const [nombre] = await conn.query(`CALL sp_nombre_pertenece_cuenta(${cuenta_destino});`);
    const resultado = Object.values(JSON.parse(JSON.stringify(nombre))[0]);
    console.log(resultado);
    return res.json(resultado);
}
exports.getDueñoCuenta = getDueñoCuenta;
