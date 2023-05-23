import { Request, Response } from "express";
import connection from "../database";


export async function getFoliosDisponibles(req:Request, res: Response): Promise<Response> {

    const conn = await connection;

    const [foliosDisponibles] = await conn.query(`CALL sp_buscar_folio_disponible()`);

    const resultado = Object.values(JSON.parse(JSON.stringify(foliosDisponibles))[0]);

    //console.log(foliosDisponibles);

    return res.json(resultado);
    
}