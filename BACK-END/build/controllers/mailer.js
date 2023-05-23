"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailer = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const mailer = (req, res) => {
    const { body } = req;
    const config = nodemailer_1.default.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: "ratshidalgo@gmail.com",
            pass: "kcjmwvdufmmjpoxt", // contraseña que se genera en google para aplicaciones de terceros 
        },
    });
    const opciones = {
        from: 'Banca E',
        to: body.email,
        subject: body.asunto,
        text: body.mensaje // Mensaje en texto, se puede implementar para mandar datos adjuntos 
    };
    //configuracion de si se manda o no
    config.sendMail(opciones, function (error, info) {
        if (error) {
            return res.json({ ok: false, message: error.message });
        }
        else {
            return res.json({
                ok: true,
                message: info.messageId
            });
        }
    });
};
exports.mailer = mailer;
exports.default = {
    mailer: exports.mailer
};
