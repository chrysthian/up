import { Body, Get, Post, Route } from "tsoa";

interface Icecream {
  id: number;
  name: string;
}

@Route("api/icecream")
export default class IcecreamController {
  list : Icecream[] = [
    {
      id: 0,
      name: "Chocolate"
    },
    {
      id: 1,
      name: "Morango"
    },
  ];

  @Get("/getAll")
  public async all(): Promise<Icecream[]> {
    return this.list;
  }

  @Post("/create")
  public async create(@Body() body: {name: string}): Promise<Icecream> {
    const item : Icecream = {
      id: this.list.length,
      name: body.name,
    }

    this.list.push(item)
    return item;
  }
}