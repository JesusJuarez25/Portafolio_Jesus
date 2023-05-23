import { Request, response, Response } from "express";
import connection from "../database";


export async function getMovimiento(req:Request, res: Response): Promise<Response> {

    const conn = await connection;

    const {tipo_cuenta, id_usu} = req.body;
   
    const [movimientos] = await conn.query(`CALL sp_buscar_cuentas_cliente('${tipo_cuenta}', ${id_usu});`);

    const resultado = Object.values(JSON.parse(JSON.stringify(movimientos))[0]);

    console.log(movimientos);

    return res.json(resultado);
    
}