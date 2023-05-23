"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postBuroCredito = void 0;
const database_1 = __importDefault(require("../database"));
async function postBuroCredito(req, res) {
    const conn = await database_1.default;
    const { urp } = req.body;
    console.log(urp);
    const [buro] = await conn.query(`CALL sp_burocredito('${urp}');`);
    const resultado = Object.values(JSON.parse(JSON.stringify(buro))[0]);
    console.log(buro);
    return res.json(resultado);
}
exports.postBuroCredito = postBuroCredito;
