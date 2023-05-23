"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCliente = void 0;
const database_1 = __importDefault(require("../database"));
async function getCliente(req, res) {
    const conn = await database_1.default;
    const [cliente] = await conn.query(`CALL sp_buscar_clientes`);
    const res2 = Object.values(JSON.parse(JSON.stringify(cliente))[0]);
    console.log(cliente);
    return res.json(res2);
}
exports.getCliente = getCliente;
