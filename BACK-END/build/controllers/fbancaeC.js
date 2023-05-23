"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fbancaeC = void 0;
const database_1 = __importDefault(require("../database"));
async function fbancaeC(req, res) {
    const conn = await database_1.default;
    const { CURP } = req.body;
    console.log(CURP);
    const [busqueda] = await conn.query(`CALL sp_bancaEcurp('${CURP}');`);
    //aqui se parsea para mostrar alertas
    const resultado = Object.values(JSON.parse(JSON.stringify(busqueda))[0][0]);
    console.log(resultado);
    return res.json(resultado);
}
exports.fbancaeC = fbancaeC;
