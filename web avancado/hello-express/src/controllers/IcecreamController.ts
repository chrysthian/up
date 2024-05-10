import { Body, Delete, Get, Post, Put, Route } from "tsoa";

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

  @Put("/update")
  public async update(@Body() body: {id: number, name: string}): Promise<Icecream | undefined> {
    const item = this.list.find(item => item.id === body.id)
    
    if(item) {
      item.name = body.name;
    }

    return item;
  }

  @Delete("/delete/:id")
  public async delete(id: number): Promise<number>  {
    const index = this.list.findIndex((item) => item.id === id)

    if(index > -1) {
      this.list.splice(index, 1);
    }

    return index;
  }
}