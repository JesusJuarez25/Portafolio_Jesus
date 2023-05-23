import { Router } from "express";
import { getMovimiento } from "../controllers/mostrarMovimientosC";

const router = Router();

router.post('/', getMovimiento)

export default router;