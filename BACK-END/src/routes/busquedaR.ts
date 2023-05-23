import { Router } from "express";
import { getCliente } from "../controllers/busquedaC";

const router = Router();

router.get('/', getCliente)

export default router;