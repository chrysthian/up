import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import pingRoutes from './routes/pingRoutes';
import icecreamRoutes from './routes/icecreamRoutes';

import swaggerUi from "swagger-ui-express";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.static("public"));
app.use(
    "/swagger", // endereço de onde o swagger responde
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: "/swagger.json",
      },
    })
  );

app.use('/api/', pingRoutes)
app.use('/api/icecream', icecreamRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})