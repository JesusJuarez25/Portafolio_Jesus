import {Request, Response} from 'express';

import query from '../database';

class AutenticacionController {
    
    public index (req: Request, res: Response) {

       res.json('usuario');
       
    } 
}

const autenticacionController = new AutenticacionController();
export default autenticacionController;