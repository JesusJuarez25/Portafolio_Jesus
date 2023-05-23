import { Request, Response } from "express";
import connection from "../database";

export async function postTransferenciaSpei(req:Request, res: Response): Promise<Response> {

    const conn = await connection;

    const {cuenta_origen, cuenta_destino, monto, conceptoD} =req.body;
    
    const [transferenciaSpei] = await conn.query(`CALL sp_transferencia_spei('${cuenta_origen}', '${cuenta_destino}', ${monto}, '${conceptoD}');`);
    const resultado = Object.values(JSON.parse(JSON.stringify(transferenciaSpei))[0]);
    console.log(resultado);
    return res.json(resultado);
}