import {Request, Response} from "express";
import connection from "../database";

export async function getNumerosCuentas(req:Request, res: Response){

    const conn = await connection;

    const {id_usu} =req.body;
    console.log(id_usu);

    const [numeroCuentas] = await conn.query(`CALL sp_listar_numero_cuenta(${id_usu});`);

    const resultado = Object.values(JSON.parse(JSON.stringify(numeroCuentas))[0]);
    //console.log(numeroCuentas);
    return res.json(resultado);
}