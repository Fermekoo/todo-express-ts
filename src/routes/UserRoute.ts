import BaseRoute from "./BaseRoute";
import { auth } from "../middlewares/AuthMiddleware";

import UserController from "../controllers/UserController";

class UserRoute extends BaseRoute
{
    public routes(): void
    {
        this.router.get("/", auth, UserController.index);
        this.router.post("/", UserController.create);
        this.router.get("/:id", UserController.find);
        this.router.put("/:id", UserController.update);
        this.router.delete("/:id", UserController.delete);
    }
}

export default new UserRoute().router;