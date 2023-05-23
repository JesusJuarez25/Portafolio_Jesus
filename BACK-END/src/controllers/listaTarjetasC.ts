import {Request, Response} from "express";
import connection from "../database";

export async function getTarjetas(req:Request, res: Response){

    const conn = await connection;

    const {id_usu} =req.query;
    console.log(id_usu);

    const [tarjetas] = await conn.query(`CALL sp_listar_tarjetas('${id_usu}');`);

    const resultado = Object.values(JSON.parse(JSON.stringify(tarjetas))[0]);
    console.log(tarjetas);
    return res.json(resultado);
}