import {Request, Response} from "express";
import connection from "../database";

export async function postAsignarCredito(req:Request, res: Response){

    const conn = await connection;

    const {tipo_credito,folio,urp} =req.body;
    console.log(tipo_credito,folio,urp);

    const [credito] = await conn.query(`CALL sp_crear_tarjeta_credito(${tipo_credito},${folio},'${urp}');`);

    const resultado = Object.values(JSON.parse(JSON.stringify(credito))[0]);
    console.log(credito);
    return res.json(resultado);
    
}