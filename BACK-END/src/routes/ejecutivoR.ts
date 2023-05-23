import { Router } from "express";
import { ejecutivo } from "../controllers/ejecutivoC";
import validateToken from './validate-token';

const router = Router();

router.get('/', validateToken, ejecutivo);

export default router;