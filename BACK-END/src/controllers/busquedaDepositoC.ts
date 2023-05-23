import { Request, response, Response } from "express";
import connection from "../database";


export async function getCuenta(req:Request, res: Response): Promise<Response> {

    const conn = await connection;

    const {cuenta} = req.body;
   
    const [cliente] = await conn.query(`CALL sp_buscar_cuenta('${cuenta}');`);

    const resultado = Object.values(JSON.parse(JSON.stringify(cliente))[0]);

    console.log(cliente);

    return res.json(resultado);
    
}