import { Router } from "express";
import { postAgregarCuenta } from "../controllers/agregarCuentaC";

const router = Router();

router.post('/', postAgregarCuenta);

export default router;