"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTarjeta = void 0;
const database_1 = __importDefault(require("../database"));
async function getTarjeta(req, res) {
    const conn = await database_1.default;
    const { tarjet } = req.query;
    console.log(tarjet, req.query);
    const [tarjeta] = await conn.query(`CALL sp_tarjeta('${tarjet}');`);
    const resultado = Object.values(JSON.parse(JSON.stringify(tarjeta))[0]);
    console.log(tarjeta);
    return res.json(resultado);
}
exports.getTarjeta = getTarjeta;
