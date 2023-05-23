"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumerosCuentas = void 0;
const database_1 = __importDefault(require("../database"));
async function getNumerosCuentas(req, res) {
    const conn = await database_1.default;
    const { id_usu } = req.body;
    console.log(id_usu);
    const [numeroCuentas] = await conn.query(`CALL sp_listar_numero_cuenta(${id_usu});`);
    const resultado = Object.values(JSON.parse(JSON.stringify(numeroCuentas))[0]);
    //console.log(numeroCuentas);
    return res.json(resultado);
}
exports.getNumerosCuentas = getNumerosCuentas;
