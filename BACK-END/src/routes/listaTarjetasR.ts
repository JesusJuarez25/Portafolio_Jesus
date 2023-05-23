import { Router } from "express";
import { getTarjetas } from "../controllers/listaTarjetasC";

const router=Router();

router.get('/',getTarjetas)

export default router;