import { Router } from "express";
import { administrador } from "../controllers/administradorC";
import validateToken from './validate-token';

const router = Router();

router.get('/', validateToken, administrador);

export default router;