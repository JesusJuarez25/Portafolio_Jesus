"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAgregarCuenta = void 0;
const database_1 = __importDefault(require("../database"));
async function postAgregarCuenta(req, res) {
    const conn = await database_1.default;
    const { folio_s, tipo_cuenta, curp } = req.body;
    const [agregarCuenta] = await conn.query(`CALL sp_generar_cuenta('${folio_s}', '${tipo_cuenta}', '${curp}');`);
    const resultado = Object.values(JSON.parse(JSON.stringify(agregarCuenta))[0]);
    console.log(resultado);
    return res.json(resultado);
}
exports.postAgregarCuenta = postAgregarCuenta;
