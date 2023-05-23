import { Router } from "express";
import { getPaises } from "../controllers/obtenerPaisesC";

const router = Router();

router.get('/', getPaises)

export default router;