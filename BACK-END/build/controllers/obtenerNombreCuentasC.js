"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNombreCuentas = void 0;
const database_1 = __importDefault(require("../database"));
async function getNombreCuentas(req, res) {
    const conn = await database_1.default;
    const [nombreCuentas] = await conn.query(`CALL sp_buscar_nombre_tipo_cuenta()`);
    const resultado = Object.values(JSON.parse(JSON.stringify(nombreCuentas))[0]);
    //console.log(nombreCuentas);
    return res.json(resultado);
}
exports.getNombreCuentas = getNombreCuentas;
