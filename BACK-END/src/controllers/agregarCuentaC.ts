import { Request, Response } from "express";
import connection from "../database";

export async function postAgregarCuenta(req:Request, res: Response): Promise<Response> {
    const conn = await connection;
    const {folio_s, tipo_cuenta, curp} =req.body;
    const [agregarCuenta] = await conn.query(`CALL sp_generar_cuenta('${folio_s}', '${tipo_cuenta}', '${curp}');`);
    const resultado = Object.values(JSON.parse(JSON.stringify(agregarCuenta))[0]);
    console.log(resultado);
    return res.json(resultado);
}