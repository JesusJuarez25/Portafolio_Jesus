import { Router } from "express";
import { postBuroCredito } from "../controllers/buroCreditoC";


const router = Router();

router.post('/', postBuroCredito)

export default router;