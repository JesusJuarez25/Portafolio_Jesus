"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postCuentaCliente = void 0;
const database_1 = __importDefault(require("../database"));
async function postCuentaCliente(req, res) {
    const conn = await database_1.default;
    const { curp, rfc, nombre, ape_pat, ape_mat, genero, edad, fecha_nacimiento, num_celular, num_telefono, estado_civil, entidad_nacimiento, tipo_iden, numero_identificacion, documento_iden, correo, pais_residencia, estado_residencia, cp, municipio, colonia, calle, num_interior, num_exterior, tipo_com_dom, numero_com_dom, documento_com_dom, folio_s, tipo_cuenta } = req.body;
    const [cuentaCliente] = await conn.query(`CALL sp_generar_cliente_cuenta('${curp}', '${rfc}', '${nombre}', '${ape_pat}', '${ape_mat}', '${genero}', ${edad}, '${fecha_nacimiento}', ${num_celular}, ${num_telefono}, '${estado_civil}', '${entidad_nacimiento}', '${tipo_iden}', '${numero_identificacion}', '${documento_iden}', '${correo}', '${pais_residencia}', '${estado_residencia}', ${cp}, '${municipio}', '${colonia}', '${calle}', '${num_interior}', '${num_exterior}', '${tipo_com_dom}', '${numero_com_dom}', '${documento_com_dom}', ${folio_s}, ${tipo_cuenta});`);
    const resultado = Object.values(JSON.parse(JSON.stringify(cuentaCliente))[0]);
    console.log(cuentaCliente);
    return res.json(resultado);
}
exports.postCuentaCliente = postCuentaCliente;
