import { Router } from "express";
import { getServicios } from "../controllers/listarServiciosC";

const router=Router();

router.get('/',getServicios)

export default router;