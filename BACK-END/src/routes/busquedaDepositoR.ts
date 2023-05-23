import { Router } from "express";
import { getCuenta } from "../controllers/busquedaDepositoC";

const router = Router();

router.post('/', getCuenta)

export default router;