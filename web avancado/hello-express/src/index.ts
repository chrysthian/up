import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import routes from './routes/routes';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use('/api', routes)
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})