import { Request, Response } from "express";

abstract class BaseService
{
    credential: {
        id: number
    };

    body: Request['body'];
    params: Request['params'];

    constructor(req: Request)
    {
        this.credential = req.app.locals.credential;
        this.body = req.body;
        this.params = req.params;
    } 
}

export default BaseService