import {Request, Response} from "express";
import connection from "../database";

export async function apagarTarjeta(req:Request, res: Response){

    const conn = await connection;

    const {tarjet} =req.body;
    console.log(tarjet);

    const [apagar] = await conn.query(`CALL sp_apagar_prender_tarjeta('${tarjet}');`);

    const resultado = Object.values(JSON.parse(JSON.stringify(apagar))[0]);
    console.log(apagar);
    return res.json(resultado);
    
}