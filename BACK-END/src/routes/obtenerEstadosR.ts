import { Router } from "express";
import { getEstados } from "../controllers/obtenerEstadosC";

const router = Router();

router.get('/', getEstados)

export default router;