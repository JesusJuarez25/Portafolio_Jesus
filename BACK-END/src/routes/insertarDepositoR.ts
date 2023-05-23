import { Router } from "express";
import { insertarDeposito } from "../controllers/insertarDepositoC";

const router = Router();

router.post('/', insertarDeposito)

export default router;