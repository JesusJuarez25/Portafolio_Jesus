"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apagarCuenta = void 0;
const database_1 = __importDefault(require("../database"));
async function apagarCuenta(req, res) {
    const conn = await database_1.default;
    const { cuent } = req.body;
    console.log(cuent);
    const [apagar] = await conn.query(`CALL sp_apagar_prender_cuenta('${cuent}');`);
    const resultado = Object.values(JSON.parse(JSON.stringify(apagar))[0]);
    console.log(apagar);
    return res.json(resultado);
}
exports.apagarCuenta = apagarCuenta;
