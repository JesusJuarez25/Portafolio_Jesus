import { Router } from "express";
import { usubancaeC } from "../controllers/usubancaeC";

const router = Router();
router.post('/', usubancaeC);

export default router;

