"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postPagarServicio = void 0;
const database_1 = __importDefault(require("../database"));
async function postPagarServicio(req, res) {
    const conn = await database_1.default;
    const { convenio, tarjet, monto, referencia } = req.body;
    console.log(convenio, tarjet, monto, referencia);
    const [pagar] = await conn.query(`CALL sp_pagar_servicio('${convenio}','${tarjet}','${monto}','${referencia}');`);
    const resultado = Object.values(JSON.parse(JSON.stringify(pagar))[0]);
    console.log(pagar);
    return res.json(resultado);
}
exports.postPagarServicio = postPagarServicio;
