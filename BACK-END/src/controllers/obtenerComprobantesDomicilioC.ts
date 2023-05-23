import { Request, Response } from "express";
import connection from "../database";


export async function getComprobantesDomiclio(req:Request, res: Response): Promise<Response> {

    const conn = await connection;

    const [comprobantesDomicilio] = await conn.query(`CALL sp_buscar_tipo_comprobantes_domicilio()`);

    const resultado = Object.values(JSON.parse(JSON.stringify(comprobantesDomicilio))[0]);

    //console.log(comprobantesDomicilio);

    return res.json(resultado);
    
}