import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import { config as  dotenv } from "dotenv";
import AuthRoute from "./routes/AuthRoute";
import CategoryRoute from "./routes/CategoryRoute";

class App
{
    public app: Application;

    constructor() 
    {
        this.app = express();
        this.plugins();
        this.routes();
        dotenv();
    }

    protected plugins(): void
    {
        this.app.use(express.json());
        this.app.use(morgan("dev")); 
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }

    protected routes() : void
    {
        this.app.route("/").get((req: Request, res: Response) => {
            res.send("running well");
        });

        this.app.use("/auth", AuthRoute);
        this.app.use("/category", CategoryRoute);
    }
}

const port: number = 8700;

const app = new App().app;

app.listen(port, () => {
    console.log(process.env.DB_HOST);
});