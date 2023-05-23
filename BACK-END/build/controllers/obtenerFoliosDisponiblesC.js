"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFoliosDisponibles = void 0;
const database_1 = __importDefault(require("../database"));
async function getFoliosDisponibles(req, res) {
    const conn = await database_1.default;
    const [foliosDisponibles] = await conn.query(`CALL sp_buscar_folio_disponible()`);
    const resultado = Object.values(JSON.parse(JSON.stringify(foliosDisponibles))[0]);
    //console.log(foliosDisponibles);
    return res.json(resultado);
}
exports.getFoliosDisponibles = getFoliosDisponibles;
