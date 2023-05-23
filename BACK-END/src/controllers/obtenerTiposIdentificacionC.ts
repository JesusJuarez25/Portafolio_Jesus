import { Request, Response } from "express";
import connection from "../database";


export async function getTiposIdentificacion(req:Request, res: Response): Promise<Response> {

    const conn = await connection;

    const [tiposIdentificacion] = await conn.query(`CALL sp_buscar_tipo_identificaciones()`);

    const resultado = Object.values(JSON.parse(JSON.stringify(tiposIdentificacion))[0]);

    //console.log(tiposIdentificacion);

    return res.json(resultado);
    
}