"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postTransferenciaSpei = void 0;
const database_1 = __importDefault(require("../database"));
async function postTransferenciaSpei(req, res) {
    const conn = await database_1.default;
    const { cuenta_origen, cuenta_destino, monto, conceptoD } = req.body;
    const [transferenciaSpei] = await conn.query(`CALL sp_transferencia_spei('${cuenta_origen}', '${cuenta_destino}', ${monto}, '${conceptoD}');`);
    const resultado = Object.values(JSON.parse(JSON.stringify(transferenciaSpei))[0]);
    console.log(resultado);
    return res.json(resultado);
}
exports.postTransferenciaSpei = postTransferenciaSpei;
