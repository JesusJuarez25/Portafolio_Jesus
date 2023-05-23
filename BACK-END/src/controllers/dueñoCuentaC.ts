import {Request, Response} from "express";
import connection from "../database";

export async function getDueñoCuenta(req:Request, res: Response){

    const conn = await connection;

    const {cuenta_destino} =req.body;
    console.log(cuenta_destino);

    const [nombre] = await conn.query(`CALL sp_nombre_pertenece_cuenta(${cuenta_destino});`);

    const resultado = Object.values(JSON.parse(JSON.stringify(nombre))[0]);
    console.log(resultado);
    return res.json(resultado);
    
}