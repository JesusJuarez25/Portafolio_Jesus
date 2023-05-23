"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEstadosCivil = void 0;
const database_1 = __importDefault(require("../database"));
async function getEstadosCivil(req, res) {
    const conn = await database_1.default;
    const [estadosCivil] = await conn.query(`Call sp_buscar_estados_civil()`);
    const resultado = Object.values(JSON.parse(JSON.stringify(estadosCivil))[0]);
    //console.log(estadosCivil);
    return res.json(resultado);
}
exports.getEstadosCivil = getEstadosCivil;
