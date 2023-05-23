import { Router } from "express";
import { getNombreGeneros } from "../controllers/obtenerNombreGenerosC";

const router = Router();

router.get('/', getNombreGeneros)

export default router;