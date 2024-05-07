import express, { Request, Response } from "express";
import PingController from "../controllers/PingController";

const router = express.Router()
const controller = new PingController();

router.get('/ping', async (req: Request, res: Response) => {
    const response = await controller.ping();
    return res.send(response);
})

export default router;