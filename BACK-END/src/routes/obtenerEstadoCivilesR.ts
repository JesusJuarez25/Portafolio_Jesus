import { Router } from "express";
import { getEstadosCivil } from "../controllers/obtenerEstadoCivilesC";

const router = Router();

router.get('/', getEstadosCivil)

export default router;