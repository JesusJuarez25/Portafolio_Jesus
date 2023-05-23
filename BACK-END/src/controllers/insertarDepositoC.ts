import { Request, response, Response } from "express";
import connection from "../database";

export async function insertarDeposito(req:Request, res: Response) {

    const conn = await connection;

    const {cuenta, tipo_c, nombre, importe, curp, referencia} = req.body;
    console.log(cuenta);
    
    const [cliente] = await conn.query(`CALL sp_insertar_movimiento('${cuenta}', '${tipo_c}', '${nombre}', '${importe}', '${curp}', '${referencia}');`);

    const resultado = Object.values(JSON.parse(JSON.stringify(cliente))[0]);
    console.log(cliente);
    return res.json(resultado);
}