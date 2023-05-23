import { Request, Response } from "express";
import connection from "../database";


export async function getPaises(req:Request, res: Response): Promise<Response> {

    const conn = await connection;

    const [paises] = await conn.query(`CALL sp_buscar_paises()`);

    const resultado = Object.values(JSON.parse(JSON.stringify(paises))[0]);

    //console.log(paises);

    return res.json(resultado);
    
}