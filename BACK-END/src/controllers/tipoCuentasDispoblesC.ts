import { Request, Response } from "express";
import connection from "../database";


export async function getTiposCuentasDisponibles(req:Request, res: Response): Promise<Response> {

    const conn = await connection;

    const {curp} =req.body;

    const [tiposCuentasDisponibles] = await conn.query(`CALL sp_cuentas_disponibles('${curp}');`);

    const resultado = Object.values(JSON.parse(JSON.stringify(tiposCuentasDisponibles))[0]);

    console.log(resultado);

    return res.json(resultado);
}