import { Router } from "express";
import { postTransferencia } from "../controllers/transferenciaC";

const router = Router();

router.post('/', postTransferencia);

export default router;