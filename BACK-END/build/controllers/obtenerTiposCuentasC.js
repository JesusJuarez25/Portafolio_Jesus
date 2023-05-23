"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTiposCuentas = void 0;
const database_1 = __importDefault(require("../database"));
async function getTiposCuentas(req, res) {
    const conn = await database_1.default;
    const [tipoCuentas] = await conn.query(`CALL sp_buscar_tipo_cuentas()`);
    const resultado = Object.values(JSON.parse(JSON.stringify(tipoCuentas))[0]);
    //console.log(tipoCuentas);
    return res.json(resultado);
}
exports.getTiposCuentas = getTiposCuentas;
