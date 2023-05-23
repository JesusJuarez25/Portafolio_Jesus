import {Request, Response} from "express";
import connection from "../database";

export async function apagarCuenta(req:Request, res: Response){

    const conn = await connection;

    const {cuent} =req.body;
    console.log(cuent);

    const [apagar] = await conn.query(`CALL sp_apagar_prender_cuenta('${cuent}');`);

    const resultado = Object.values(JSON.parse(JSON.stringify(apagar))[0]);
    console.log(apagar);
    return res.json(resultado);
    
}