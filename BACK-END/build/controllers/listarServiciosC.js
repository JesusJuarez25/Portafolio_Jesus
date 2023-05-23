"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServicios = void 0;
const database_1 = __importDefault(require("../database"));
async function getServicios(req, res) {
    const conn = await database_1.default;
    const [servicios] = await conn.query(`Call sp_listar_servicios()`);
    const resultado = Object.values(JSON.parse(JSON.stringify(servicios))[0]);
    console.log(servicios);
    return res.json(resultado);
}
exports.getServicios = getServicios;
