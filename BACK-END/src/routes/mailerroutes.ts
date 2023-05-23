import express from 'express';
import { mailer } from '../controllers/mailer';

const app = express();

app.post('/', mailer);

export default app;