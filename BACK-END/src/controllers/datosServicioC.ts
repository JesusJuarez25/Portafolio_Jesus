import {Request, Response} from "express";
import connection from "../database";

export async function getServicio(req:Request, res: Response){

    const conn = await connection;

    const {convenio} =req.query;
    console.log(convenio);

    const [servicio] = await conn.query(`CALL sp_datos_servicio('${convenio}');`);

    const resultado = Object.values(JSON.parse(JSON.stringify(servicio))[0]);
    console.log(servicio);
    return res.json(resultado);
    
}