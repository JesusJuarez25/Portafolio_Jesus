import { Router } from "express";
import { getDueñoCuenta } from "../controllers/dueñoCuentaC";

const router=Router();

router.post('/',getDueñoCuenta)

export default router;