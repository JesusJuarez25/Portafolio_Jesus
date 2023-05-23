import { Router } from "express";
import { getTarjeta } from "../controllers/obtenerTarjetaC";

const router=Router();

router.get('/',getTarjeta)

export default router;