import { Request, response, Response } from "express";
import connection from "../database";

export async function informacionCliente(req:Request, res: Response) {

    const conn = await connection;

    const {curp} = req.body;
    console.log(curp);
    
    const [cliente] = await conn.query(`CALL sp_informacion_cliente('${curp}');`);

    const resultado = Object.values(JSON.parse(JSON.stringify(cliente))[0]);
    console.log(cliente);
    return res.json(resultado);
}