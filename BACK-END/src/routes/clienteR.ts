import { Router } from "express";
import { cliente } from "../controllers/clienteC";
import validateToken from './validate-token';

const router = Router();

router.get('/', validateToken, cliente);

export default router;