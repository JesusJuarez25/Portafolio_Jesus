import { Router } from "express";
import { cajero } from "../controllers/cajeroC";
import validateToken from './validate-token';

const router = Router();

router.get('/', validateToken, cajero);

export default router;