import { Request, response, Response } from "express";
import connection from "../database";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
import CryptoJS from "crypto-js";




export const loginUser = async (req: Request, res: Response, ) =>  {

    const {USUA, CONTRA} = req.body;
    console.log(CONTRA);
    const hashedPassword = CryptoJS.SHA256(CONTRA).toString();
    console.log(typeof (USUA) , "hola");
    console.log(hashedPassword, USUA, "datos usuario");

    //mandar contraseña hasheada
    const [datos] = await connection.query (`CALL sp_validar("${USUA}", "${hashedPassword}");`);
    console.log(datos, "datos");
    //Ingreso al array del objeto
    const res2 = Object.values(JSON.parse(JSON.stringify(datos))[0]);

    if((Object.keys(JSON.parse(JSON.stringify(res2[0]))).includes('error'))){
      res.json({error: "El Usuario no Existe"})
      return;
    }
    else {const{ID_USUARIO, USUARIO, NOMBRE, ROL_ID, CONTRASEÑA } = (JSON.parse(JSON.stringify(res2[0])))

    console.log(ROL_ID, "rol");

    //Validamos password
   /*const valid = await bcrypt.compare(CONTRA, CONTRASEÑA )
<<<<<<< HEAD
    console.log(valid)
=======
    //console.log(valid)
>>>>>>> Axel1
    if(!valid){
      return res.status(400).json({
        msg: 'Password incorrecta'
      })
    }*/
    const token = jwt.sign({
      USUA : USUARIO
    }, process.env.SECRET_KEY || 'sbec', {
      expiresIn: '24h'
    })
    res.json({token, rol: ROL_ID, nombre: NOMBRE, USUA, ID_USUARIO})
    console.log(token)
    //existe
}
} 


