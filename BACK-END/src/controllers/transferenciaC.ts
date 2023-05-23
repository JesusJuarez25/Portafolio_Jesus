import { Request, Response } from "express";
import connection from "../database";

export async function postTransferencia(req:Request, res: Response): Promise<Response> {

    const conn = await connection;

    const {cuenta_origen, cuenta_destino, monto, conceptoD} =req.body;
    
    const [transferencia] = await conn.query(`CALL sp_transferencia('${cuenta_origen}', '${cuenta_destino}', ${monto}, '${conceptoD}');`);
    const resultado = Object.values(JSON.parse(JSON.stringify(transferencia))[0]);
    console.log(resultado);
    return res.json(resultado);
}