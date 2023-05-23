import { Request, response, Response } from "express";
import connection from "../database";
import bcrypt from 'bcrypt'
import CryptoJS from "crypto-js";

export async function usubancaeC(req:Request, res: Response){
    const conn = await connection;
    const{USUARIO, CONTRASEÑA, NOMBRE}=req.body;
    console.log(USUARIO);
    console.log(CONTRASEÑA);
    console.log(NOMBRE); 

    const hashedPassword = CryptoJS.SHA256(CONTRASEÑA).toString();
    console.log(hashedPassword);
    console.log(hashedPassword, USUARIO, "datos usuario");

    const [crearBancae]=await conn.query(`CALL sp_bancaE('${USUARIO}','${hashedPassword}', '${NOMBRE}');`);
    //aqui se parsea para mostrar alertas
    const resultado = Object.values(JSON.parse(JSON.stringify(crearBancae))[0]);
    console.log(resultado);
    return res.json(resultado);
}

  
 