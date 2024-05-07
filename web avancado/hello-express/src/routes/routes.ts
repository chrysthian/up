import express, { Request, Response } from "express";
import PingController from "../controllers/PingController";
const router = express.Router()

//Post Method
router.get('/ping', async (req: Request, res: Response) => {
    const controller = new PingController();
    const response = await controller.getMessage();
    return res.send(response);
})

router.post('/post', (req: Request, res: Response) => {
    res.send('Post API')
})

//Get all Method
router.get('/getAll', (req: Request, res: Response) => {
    res.send('Get All API')
})

//Get by ID Method
router.get('/getOne/:id', (req: Request, res: Response) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', (req: Request, res: Response) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req: Request, res: Response) => {
    res.send('Delete by ID API')
})

export default router;