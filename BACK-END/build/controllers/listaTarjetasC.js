"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTarjetas = void 0;
const database_1 = __importDefault(require("../database"));
async function getTarjetas(req, res) {
    const conn = await database_1.default;
    const { id_usu } = req.query;
    console.log(id_usu);
    const [tarjetas] = await conn.query(`CALL sp_listar_tarjetas('${id_usu}');`);
    const resultado = Object.values(JSON.parse(JSON.stringify(tarjetas))[0]);
    console.log(tarjetas);
    return res.json(resultado);
}
exports.getTarjetas = getTarjetas;
