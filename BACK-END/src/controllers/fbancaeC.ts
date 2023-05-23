import { Request, response, Response } from "express";
import connection from "../database";

export async function fbancaeC(req:Request, res: Response){
    const conn = await connection;
    const {CURP}=req.body;
    console.log(CURP);

    const [busqueda]=await conn.query(`CALL sp_bancaEcurp('${CURP}');`);
    //aqui se parsea para mostrar alertas
    const resultado = Object.values(JSON.parse(JSON.stringify(busqueda))[0][0]);
    console.log(resultado);
    return res.json(resultado);
}
     

