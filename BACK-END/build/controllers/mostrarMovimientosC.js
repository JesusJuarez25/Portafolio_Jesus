"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovimiento = void 0;
const database_1 = __importDefault(require("../database"));
async function getMovimiento(req, res) {
    const conn = await database_1.default;
    const { tipo_cuenta, id_usu } = req.body;
    const [movimientos] = await conn.query(`CALL sp_buscar_cuentas_cliente('${tipo_cuenta}', ${id_usu});`);
    const resultado = Object.values(JSON.parse(JSON.stringify(movimientos))[0]);
    console.log(movimientos);
    return res.json(resultado);
}
exports.getMovimiento = getMovimiento;
