import { Request, Response } from "express";
import connection from "../database";


export async function getNombreCuentas(req:Request, res: Response): Promise<Response> {

    const conn = await connection;

    const [nombreCuentas] = await conn.query(`CALL sp_buscar_nombre_tipo_cuenta()`);

    const resultado = Object.values(JSON.parse(JSON.stringify(nombreCuentas))[0]);

    //console.log(nombreCuentas);

    return res.json(resultado);
    
}