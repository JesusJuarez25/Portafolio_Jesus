import express, { Router } from 'express';

import autenticacionController  from '../controllers/autenticacionController';
import validateToken from './validate-token';

class AutenticacionRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', validateToken, autenticacionController.index);
    }
}

const autenticacionRoutes = new AutenticacionRoutes();
export default autenticacionRoutes.router;

