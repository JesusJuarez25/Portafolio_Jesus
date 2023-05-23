import { Router } from "express";
import { getNombreCuentas } from "../controllers/obtenerNombreCuentasC";

const router = Router();

router.get('/', getNombreCuentas)

export default router;