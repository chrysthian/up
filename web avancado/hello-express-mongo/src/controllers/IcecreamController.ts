import { Body, Post, Route } from "tsoa"
import { IcecreamModel } from "../models/Icecream"

@Route("api/icecream")
export default class IcecreamController {
  @Post("/create")
  public async create(@Body() body: { name: string }): Promise<string> {
    const data = new IcecreamModel({
      name: body.name,
    })

    try {
      await data.save()
      return "OK"
    } catch (error) {
      return JSON.stringify(error)
    }
  }

  /*   @Put("/getAll")
  public async all(): Promise<Icecream[]> {

  }

  @Put("/update")
  public async update(@Body() body: { id: number; name: string }): Promise<Icecream | undefined> {
  }

  @Delete("/delete/:id")
  public async delete(id: number): Promise<number> {

  } */
}
