import { Router } from "express";
import { postTransferenciaCuentas } from "../controllers/transferenciaCuentasC";

const router = Router();

router.post('/', postTransferenciaCuentas);

export default router;