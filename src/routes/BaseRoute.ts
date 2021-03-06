import { Router } from "express";
import RouteInterface from "./RouteInterface";

abstract class BaseRoute implements RouteInterface
{
    public router: Router;

    constructor()
    {
        this.router = Router();
        this.routes();
    }

    abstract routes(): void;
}

export default BaseRoute;