import { Router } from "express";
import { loginUser } from "../controllers/loginC";

const router = Router();

router.post('/',  loginUser);

export default router;