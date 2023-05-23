"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServicio = void 0;
const database_1 = __importDefault(require("../database"));
async function getServicio(req, res) {
    const conn = await database_1.default;
    const { convenio } = req.query;
    console.log(convenio);
    const [servicio] = await conn.query(`CALL sp_datos_servicio('${convenio}');`);
    const resultado = Object.values(JSON.parse(JSON.stringify(servicio))[0]);
    console.log(servicio);
    return res.json(resultado);
}
exports.getServicio = getServicio;
