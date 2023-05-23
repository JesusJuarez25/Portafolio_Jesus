import { Router } from "express";
import { fbancaeC } from "../controllers/fbancaeC";

const router = Router();
router.post('/', fbancaeC);

export default router;