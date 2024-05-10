import express, { Request, Response } from "express";
import IcecreamController from "../controllers/IcecreamController";

const router = express.Router()
const controller = new IcecreamController()

router.get('/getAll', async (req: Request, res: Response) => {
    const response = await controller.all()
    return res.status(200).send(response)
})

router.get('/getError', async (req: Request, res: Response) => {
    return res.status(400).send("XABLAU!");
})

router.post('/create', async (req: Request, res: Response) => {
    const response = await controller.create(req.body)
    return res.status(200).send(response)
})

router.put('/update', async (req: Request, res: Response) => {
    if (req.body.id < 0 || req.body.name == "") {
        res.status(404).send("ID Not Found!");
    }

    const response = await controller.update(req.body);

    if (response) {
        return res.status(200).send(response);
    }

    res.status(404).send("ID Not Found!");
})

router.delete('/delete/:id', async (req: Request, res: Response) => {
    const response = await controller.delete(parseInt(req.params.id));

    if (response > -1) {
        return res.status(200).send("OK");
    }

    res.status(404).send("ID Not Found!");
})

export default router;