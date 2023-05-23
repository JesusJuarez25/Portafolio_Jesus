import {Request, Response} from "express";
import connection from "../database";

export async function getServicios(req:Request, res: Response){

    const conn = await connection;

    const [servicios] = await conn.query(`Call sp_listar_servicios()`);

    const resultado = Object.values(JSON.parse(JSON.stringify(servicios))[0]);
    console.log(servicios);
    return res.json(resultado);
    
}