import { Router } from "express";
import { postCuentaCliente } from "../controllers/creacionCuentaClienteC";

const router = Router();

router.post('/', postCuentaCliente)

export default router;