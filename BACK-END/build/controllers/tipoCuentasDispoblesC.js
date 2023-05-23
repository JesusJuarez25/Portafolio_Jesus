"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTiposCuentasDisponibles = void 0;
const database_1 = __importDefault(require("../database"));
async function getTiposCuentasDisponibles(req, res) {
    const conn = await database_1.default;
    const { curp } = req.body;
    const [tiposCuentasDisponibles] = await conn.query(`CALL sp_cuentas_disponibles('${curp}');`);
    const resultado = Object.values(JSON.parse(JSON.stringify(tiposCuentasDisponibles))[0]);
    console.log(resultado);
    return res.json(resultado);
}
exports.getTiposCuentasDisponibles = getTiposCuentasDisponibles;
