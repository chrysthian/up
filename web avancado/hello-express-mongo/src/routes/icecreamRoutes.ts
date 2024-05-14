import express, { Request, Response } from "express"
import DatabaseIcecreamController from "../controllers/IcecreamController"

const router = express.Router()
const controller = new DatabaseIcecreamController()

router.post("/create", async (req: Request, res: Response) => {
  const response = await controller.create(req.body)

  return res.status(response === "OK" ? 200 : 400).send(response)
})

router.get("/getAll", async (req: Request, res: Response) => {})

router.put("/update", async (req: Request, res: Response) => {})

router.delete("/delete/:id", async (req: Request, res: Response) => {})

export default router
