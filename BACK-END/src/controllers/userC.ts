import { Request, Response } from "express";
import connection from "../database";
import bcrypt from 'bcrypt'

export const newUser = async (req: Request, res: Response) =>  {


    const { ROL_ID, ID_USUARIO, USUARIO, CONTRASEÑA, NOMBRE} = req.body;
    
    const hashedPassword = await bcrypt.hash(CONTRASEÑA, 10);

    const incercion = await connection.query('INSERT INTO usuario set ?', { ROL_ID: ROL_ID, ID_USUARIO: ID_USUARIO, USUARIO:USUARIO, CONTRASEÑA: hashedPassword, NOMBRE:NOMBRE })

    res.json(incercion)
    //REALIZAR EL MANEJO DE ERRORES
}
