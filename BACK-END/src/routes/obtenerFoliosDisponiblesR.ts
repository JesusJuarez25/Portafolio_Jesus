import { Router } from "express";
import { getFoliosDisponibles } from "../controllers/obtenerFoliosDisponiblesC";

const router = Router();

router.get('/', getFoliosDisponibles)

export default router;