import { Request, Response } from "express";

interface ControllerInterface
{
    index(req: Request, res: Response): Promise<Response>;
    find(req: Request, res: Response): Promise<Response>;
    create(req: Request, res: Response): Promise<Response>;
    update(req: Request, res: Response): Promise<Response>;
    delete(req: Request, res: Response): Promise<Response>;
}

export default ControllerInterface;