import { Request, Response } from "express";
import nodemailer from 'nodemailer';

export const mailer = (req: Request, res: Response): void => {
    const { body } = req;

    const config = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, 
        auth: {
            user: "ratshidalgo@gmail.com", // usuario de google login
            pass: "kcjmwvdufmmjpoxt", // contraseña que se genera en google para aplicaciones de terceros 
        },
    });

    const opciones = {
        from: 'Banca E', // De donde sale el correo
        to: body.email, // Correo de destino
        subject: body.asunto, // Asunto del correo
        text: body.mensaje // Mensaje en texto, se puede implementar para mandar datos adjuntos 
    };
    //configuracion de si se manda o no
    config.sendMail(opciones, function (error: Error | null, info: any) {
        if (error) {
            return res.json({ ok: false, message: error.message });
        } else {
            return res.json({
                ok: true,
                message: info.messageId
            });
        }
    });
};

export default {
    mailer
};
