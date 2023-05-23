"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComprobantesDomiclio = void 0;
const database_1 = __importDefault(require("../database"));
async function getComprobantesDomiclio(req, res) {
    const conn = await database_1.default;
    const [comprobantesDomicilio] = await conn.query(`CALL sp_buscar_tipo_comprobantes_domicilio()`);
    const resultado = Object.values(JSON.parse(JSON.stringify(comprobantesDomicilio))[0]);
    //console.log(comprobantesDomicilio);
    return res.json(resultado);
}
exports.getComprobantesDomiclio = getComprobantesDomiclio;
