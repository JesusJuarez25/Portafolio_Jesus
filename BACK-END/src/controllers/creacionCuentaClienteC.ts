import { Request, response, Response } from "express";
import connection from "../database";


export async function postCuentaCliente(req:Request, res: Response): Promise<Response> {

    const conn = await connection;

    const {curp, rfc, nombre,  ape_pat, ape_mat, genero, edad, fecha_nacimiento, num_celular, num_telefono, estado_civil, entidad_nacimiento, tipo_iden, numero_identificacion, documento_iden, correo, pais_residencia, estado_residencia, cp, municipio, colonia, calle, num_interior, num_exterior, tipo_com_dom, numero_com_dom, documento_com_dom, folio_s, tipo_cuenta} = req.body;
   
    const [cuentaCliente] = await conn.query(`CALL sp_generar_cliente_cuenta('${curp}', '${rfc}', '${nombre}', '${ape_pat}', '${ape_mat}', '${genero}', ${edad}, '${fecha_nacimiento}', ${num_celular}, ${num_telefono}, '${estado_civil}', '${entidad_nacimiento}', '${tipo_iden}', '${numero_identificacion}', '${documento_iden}', '${correo}', '${pais_residencia}', '${estado_residencia}', ${cp}, '${municipio}', '${colonia}', '${calle}', '${num_interior}', '${num_exterior}', '${tipo_com_dom}', '${numero_com_dom}', '${documento_com_dom}', ${folio_s}, ${ tipo_cuenta});`);

    const resultado = Object.values(JSON.parse(JSON.stringify(cuentaCliente))[0]);

    console.log(cuentaCliente);

    return res.json(resultado);
    
}