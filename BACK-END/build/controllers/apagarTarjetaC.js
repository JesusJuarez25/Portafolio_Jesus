"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apagarTarjeta = void 0;
const database_1 = __importDefault(require("../database"));
async function apagarTarjeta(req, res) {
    const conn = await database_1.default;
    const { tarjet } = req.body;
    console.log(tarjet);
    const [apagar] = await conn.query(`CALL sp_apagar_prender_tarjeta('${tarjet}');`);
    const resultado = Object.values(JSON.parse(JSON.stringify(apagar))[0]);
    console.log(apagar);
    return res.json(resultado);
}
exports.apagarTarjeta = apagarTarjeta;
