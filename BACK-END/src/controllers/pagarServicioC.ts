import {Request, Response} from "express";
import connection from "../database";

export async function postPagarServicio(req:Request, res: Response){

    const conn = await connection;

    const {convenio,tarjet,monto,referencia} =req.body;
    console.log(convenio,tarjet,monto,referencia);

    const [pagar] = await conn.query(`CALL sp_pagar_servicio('${convenio}','${tarjet}','${monto}','${referencia}');`);

    const resultado = Object.values(JSON.parse(JSON.stringify(pagar))[0]);
    console.log(pagar);
    return res.json(resultado);
    
}