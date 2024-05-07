import express, { Request, Response } from "express";
import IcecreamController from "../controllers/IcecreamController";

const router = express.Router()
const controller = new IcecreamController()

//Post Method
router.post('/create', async (req: Request, res: Response) => {
    const response = await controller.create(req.body)
    return res.send(response)
})

//Get all Method
router.get('/getAll', async (req: Request, res: Response) => {
    const response = await controller.all()
    return res.send(response)
})

router.get('/getError', async (req: Request, res: Response) => {
    return res.status(400).send("XABLAU!");
})

//Get by ID Method
router.get('/getOne/:id', async (req: Request, res: Response) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', async (req: Request, res: Response) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', async (req: Request, res: Response) => {
    res.send('Delete by ID API')
})

export default router;