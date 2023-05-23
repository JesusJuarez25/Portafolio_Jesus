import { Request, response, Response } from "express";
import connection from "../database";

export async function estadoCuentaCredito(req:Request, res: Response) {

    const conn = await connection;

    const {numero_cuenta, fecha} = req.body;
    console.log(numero_cuenta, fecha);
    
    const [estadoCuenta] = await conn.query(`CALL sp_estado_cuenta_c('${numero_cuenta}', '${fecha}');`);

    const resultado = Object.values(JSON.parse(JSON.stringify(estadoCuenta))[0]);
    console.log(estadoCuenta);
    return res.json(resultado);
}