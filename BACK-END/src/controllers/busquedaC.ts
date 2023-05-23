import { Request, response, Response } from "express";
import connection from "../database";


export async function getCliente(req:Request, res: Response): Promise<Response> {
    const conn = await connection;

    const [cliente] = await conn.query(`CALL sp_buscar_clientes`);
    const res2 = Object.values(JSON.parse(JSON.stringify(cliente))[0]);
    console.log(cliente);
    return res.json(res2);
}