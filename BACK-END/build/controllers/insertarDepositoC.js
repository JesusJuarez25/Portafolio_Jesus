"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertarDeposito = void 0;
const database_1 = __importDefault(require("../database"));
async function insertarDeposito(req, res) {
    const conn = await database_1.default;
    const { cuenta, tipo_c, nombre, importe, curp, referencia } = req.body;
    console.log(cuenta);
    const [cliente] = await conn.query(`CALL sp_insertar_movimiento('${cuenta}', '${tipo_c}', '${nombre}', '${importe}', '${curp}', '${referencia}');`);
    const resultado = Object.values(JSON.parse(JSON.stringify(cliente))[0]);
    console.log(cliente);
    return res.json(resultado);
}
exports.insertarDeposito = insertarDeposito;
