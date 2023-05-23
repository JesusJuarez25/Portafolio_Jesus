"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usubancaeC = void 0;
const database_1 = __importDefault(require("../database"));
const crypto_js_1 = __importDefault(require("crypto-js"));
async function usubancaeC(req, res) {
    const conn = await database_1.default;
    const { USUARIO, CONTRASEÑA, NOMBRE } = req.body;
    console.log(USUARIO);
    console.log(CONTRASEÑA);
    console.log(NOMBRE);
    const hashedPassword = crypto_js_1.default.SHA256(CONTRASEÑA).toString();
    console.log(hashedPassword);
    console.log(hashedPassword, USUARIO, "datos usuario");
    const [crearBancae] = await conn.query(`CALL sp_bancaE('${USUARIO}','${hashedPassword}', '${NOMBRE}');`);
    //aqui se parsea para mostrar alertas
    const resultado = Object.values(JSON.parse(JSON.stringify(crearBancae))[0]);
    console.log(resultado);
    return res.json(resultado);
}
exports.usubancaeC = usubancaeC;
