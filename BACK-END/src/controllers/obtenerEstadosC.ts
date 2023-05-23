import { Request, Response } from "express";
import connection from "../database";


export async function getEstados(req:Request, res: Response): Promise<Response> {

    const conn = await connection;

    const [estados] = await conn.query(`CALL sp_buscar_estados()`);

    const resultado = Object.values(JSON.parse(JSON.stringify(estados))[0]);

    //console.log(estados);

    return res.json(resultado);
    
}