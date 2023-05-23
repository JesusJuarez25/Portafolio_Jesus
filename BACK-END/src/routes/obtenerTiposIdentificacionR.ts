import { Router } from "express";
import { getTiposIdentificacion } from "../controllers/obtenerTiposIdentificacionC";

const router = Router();

router.get('/', getTiposIdentificacion)

export default router;