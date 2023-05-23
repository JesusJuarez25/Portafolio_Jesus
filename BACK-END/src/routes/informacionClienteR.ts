import express, { Router } from 'express';

import { informacionCliente } from '../controllers/informacionClienteC';

class IndexRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', informacionCliente);
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
