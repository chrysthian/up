import { Get, Route } from "tsoa";
interface PingResponse {
  message: string;
}

@Route("api/ping")
export default class PingController {
  @Get("/")
  public async ping(): Promise<PingResponse> {
    return {
      message: "pong!",
    };
  }
}