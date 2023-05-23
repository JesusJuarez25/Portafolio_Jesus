import { Request, Response } from "express";
import connection from "../database";


export async function getEstadosCivil(req:Request, res: Response): Promise<Response> {

    const conn = await connection;

    const [estadosCivil] = await conn.query(`Call sp_buscar_estados_civil()`);

    const resultado = Object.values(JSON.parse(JSON.stringify(estadosCivil))[0]);

    //console.log(estadosCivil);

    return res.json(resultado);
    
}