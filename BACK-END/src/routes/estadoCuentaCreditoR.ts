import { Router } from "express";
import { estadoCuentaCredito} from "../controllers/estadoCuentaCreditoC";

const router=Router();

router.post('/', estadoCuentaCredito);

export default router;
