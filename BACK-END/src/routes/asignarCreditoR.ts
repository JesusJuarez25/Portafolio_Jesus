import { Router } from "express";
import { postAsignarCredito } from "../controllers/asignarCreditoC";

const router = Router();

router.post('/', postAsignarCredito)

export default router;