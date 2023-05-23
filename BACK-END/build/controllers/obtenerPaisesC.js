"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaises = void 0;
const database_1 = __importDefault(require("../database"));
async function getPaises(req, res) {
    const conn = await database_1.default;
    const [paises] = await conn.query(`CALL sp_buscar_paises()`);
    const resultado = Object.values(JSON.parse(JSON.stringify(paises))[0]);
    //console.log(paises);
    return res.json(resultado);
}
exports.getPaises = getPaises;
