import { Router } from "express";
import { apagarCuenta } from "../controllers/apagarCuentaC";



const router = Router();

router.post('/', apagarCuenta)

export default router;