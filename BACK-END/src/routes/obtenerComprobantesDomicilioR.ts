import { Router } from "express";
import { getComprobantesDomiclio } from "../controllers/obtenerComprobantesDomicilioC";

const router = Router();

router.get('/', getComprobantesDomiclio)

export default router;