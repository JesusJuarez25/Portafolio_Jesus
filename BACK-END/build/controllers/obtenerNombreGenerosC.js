"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNombreGeneros = void 0;
const database_1 = __importDefault(require("../database"));
async function getNombreGeneros(req, res) {
    const conn = await database_1.default;
    const [nombreGeneros] = await conn.query(`CALL sp_buscar_generos()`);
    const resultado = Object.values(JSON.parse(JSON.stringify(nombreGeneros))[0]);
    //console.log(nombreGeneros);
    return res.json(resultado);
}
exports.getNombreGeneros = getNombreGeneros;
