import { Router } from "express";
import { newUser } from "../controllers/userC";


const router = Router();

router.post('/',  newUser);


export default router;