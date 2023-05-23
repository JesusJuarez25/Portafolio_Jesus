"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.estadoCuentaCredito = void 0;
const database_1 = __importDefault(require("../database"));
async function estadoCuentaCredito(req, res) {
    const conn = await database_1.default;
    const { numero_cuenta, fecha } = req.body;
    console.log(numero_cuenta, fecha);
    const [estadoCuenta] = await conn.query(`CALL sp_estado_cuenta_c('${numero_cuenta}', '${fecha}');`);
    const resultado = Object.values(JSON.parse(JSON.stringify(estadoCuenta))[0]);
    console.log(estadoCuenta);
    return res.json(resultado);
}
exports.estadoCuentaCredito = estadoCuentaCredito;
