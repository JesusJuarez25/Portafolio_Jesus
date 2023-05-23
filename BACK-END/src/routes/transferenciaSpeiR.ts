import { Router } from "express";
import { postTransferenciaSpei } from "../controllers/transferenciaSpeiC";

const router = Router();

router.post('/', postTransferenciaSpei);

export default router;