import { Request, Response } from "express";
import connection from "../database";


export async function getTiposCuentas(req:Request, res: Response): Promise<Response> {

    const conn = await connection;

    const [tipoCuentas] = await conn.query(`CALL sp_buscar_tipo_cuentas()`);

    const resultado = Object.values(JSON.parse(JSON.stringify(tipoCuentas))[0]);

    //console.log(tipoCuentas);

    return res.json(resultado);
    
}