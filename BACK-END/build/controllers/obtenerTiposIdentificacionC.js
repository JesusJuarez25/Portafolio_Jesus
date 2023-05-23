"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTiposIdentificacion = void 0;
const database_1 = __importDefault(require("../database"));
async function getTiposIdentificacion(req, res) {
    const conn = await database_1.default;
    const [tiposIdentificacion] = await conn.query(`CALL sp_buscar_tipo_identificaciones()`);
    const resultado = Object.values(JSON.parse(JSON.stringify(tiposIdentificacion))[0]);
    //console.log(tiposIdentificacion);
    return res.json(resultado);
}
exports.getTiposIdentificacion = getTiposIdentificacion;
