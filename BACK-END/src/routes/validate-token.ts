import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const headerToken = req.headers['authorization'];

    console.log(headerToken)

    if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
        //tiene token

        const bearerToken = headerToken.slice(7);

        try{
            const tokenvalido = jwt.verify(bearerToken, process.env.SECRET_KEY || 'sbec');
            console.log(tokenvalido)
            next();
        } catch (error) {
            res.status(400).json({
                error : 'token no valido'
            })

        }
    
    } else {
        res.status(400).json({
            error : 'Acceso denegado'
        })
    }
     
}

export default validateToken