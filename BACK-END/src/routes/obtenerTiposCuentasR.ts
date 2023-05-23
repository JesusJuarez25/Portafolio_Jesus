import { Router } from "express";
import { getTiposCuentas } from "../controllers/obtenerTiposCuentasC";

const router = Router();

router.get('/', getTiposCuentas)

export default router;