"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const database_1 = __importDefault(require("../database"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_js_1 = __importDefault(require("crypto-js"));
const loginUser = async (req, res) => {
    const { USUA, CONTRA } = req.body;
    console.log(CONTRA);
    const hashedPassword = crypto_js_1.default.SHA256(CONTRA).toString();
    console.log(typeof (USUA), "hola");
    console.log(hashedPassword, USUA, "datos usuario");
    //mandar contraseña hasheada
    const [datos] = await database_1.default.query(`CALL sp_validar("${USUA}", "${hashedPassword}");`);
    console.log(datos, "datos");
    //Ingreso al array del objeto
    const res2 = Object.values(JSON.parse(JSON.stringify(datos))[0]);
    if ((Object.keys(JSON.parse(JSON.stringify(res2[0]))).includes('error'))) {
        res.json({ error: "El Usuario no Existe" });
        return;
    }
    else {
        const { ID_USUARIO, USUARIO, NOMBRE, ROL_ID, CONTRASEÑA } = (JSON.parse(JSON.stringify(res2[0])));
        console.log(ROL_ID, "rol");
        //Validamos password
        /*const valid = await bcrypt.compare(CONTRA, CONTRASEÑA )
     <<<<<<< HEAD
         console.log(valid)
     =======
         //console.log(valid)
     >>>>>>> Axel1
         if(!valid){
           return res.status(400).json({
             msg: 'Password incorrecta'
           })
         }*/
        const token = jsonwebtoken_1.default.sign({
            USUA: USUARIO
        }, process.env.SECRET_KEY || 'sbec', {
            expiresIn: '24h'
        });
        res.json({ token, rol: ROL_ID, nombre: NOMBRE, USUA, ID_USUARIO });
        console.log(token);
        //existe
    }
};
exports.loginUser = loginUser;
