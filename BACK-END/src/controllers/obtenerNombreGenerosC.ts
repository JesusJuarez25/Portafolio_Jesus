import { Request, Response } from "express";
import connection from "../database";


export async function getNombreGeneros(req:Request, res: Response): Promise<Response> {

    const conn = await connection;

    const [nombreGeneros] = await conn.query(`CALL sp_buscar_generos()`);

    const resultado = Object.values(JSON.parse(JSON.stringify(nombreGeneros))[0]);

    //console.log(nombreGeneros);

    return res.json(resultado);
    
}