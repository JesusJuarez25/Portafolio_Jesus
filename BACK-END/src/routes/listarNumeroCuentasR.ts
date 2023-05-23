import { Router } from "express";
import { getNumerosCuentas } from "../controllers/listarNumeroCuentasC";

const router=Router();

router.post('/', getNumerosCuentas)

export default router;