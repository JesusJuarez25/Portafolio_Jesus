import { Router } from "express";
import { postPagarServicio } from "../controllers/pagarServicioC";

const router = Router();

router.post('/', postPagarServicio)

export default router;