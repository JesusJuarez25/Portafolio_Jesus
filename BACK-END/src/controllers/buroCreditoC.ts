import {Request, Response} from "express";
import connection from "../database";

export async function postBuroCredito(req:Request, res: Response){

    const conn = await connection;

    const {urp} =req.body;
    console.log(urp);

    const [buro] = await conn.query(`CALL sp_burocredito('${urp}');`);

    const resultado = Object.values(JSON.parse(JSON.stringify(buro))[0]);
    console.log(buro);
    return res.json(resultado);
    
}