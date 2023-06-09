"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEstados = void 0;
const database_1 = __importDefault(require("../database"));
async function getEstados(req, res) {
    const conn = await database_1.default;
    const [estados] = await conn.query(`CALL sp_buscar_estados()`);
    const resultado = Object.values(JSON.parse(JSON.stringify(estados))[0]);
    //console.log(estados);
    return res.json(resultado);
}
exports.getEstados = getEstados;
