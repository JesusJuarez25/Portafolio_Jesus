"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAsignarCredito = void 0;
const database_1 = __importDefault(require("../database"));
async function postAsignarCredito(req, res) {
    const conn = await database_1.default;
    const { tipo_credito, folio, urp } = req.body;
    console.log(tipo_credito, folio, urp);
    const [credito] = await conn.query(`CALL sp_crear_tarjeta_credito(${tipo_credito},${folio},'${urp}');`);
    const resultado = Object.values(JSON.parse(JSON.stringify(credito))[0]);
    console.log(credito);
    return res.json(resultado);
}
exports.postAsignarCredito = postAsignarCredito;
