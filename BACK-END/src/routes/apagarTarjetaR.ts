import { Router } from "express";
import { apagarTarjeta } from "../controllers/apagarTarjetaC";



const router = Router();

router.post('/', apagarTarjeta)

export default router;