import { Router } from "express";
import { getTiposCuentasDisponibles } from "../controllers/tipoCuentasDispoblesC";

const router = Router();

router.post('/', getTiposCuentasDisponibles)

export default router;