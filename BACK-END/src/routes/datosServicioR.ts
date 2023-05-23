import { Router } from "express";
import { getServicio } from "../controllers/datosServicioC";


const router=Router();

router.get('/',getServicio)

export default router;