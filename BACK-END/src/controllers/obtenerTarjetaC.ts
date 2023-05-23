import {Request, Response} from "express";
import connection from "../database";

export async function getTarjeta(req:Request, res: Response){

    const conn = await connection;

    const {tarjet} =req.query;
    console.log(tarjet, req.query);

    const [tarjeta] = await conn.query(`CALL sp_tarjeta('${tarjet}');`);

    const resultado = Object.values(JSON.parse(JSON.stringify(tarjeta))[0]);
    console.log(tarjeta);
    return res.json(resultado);
    
}