
import AuthController from "../controllers/AuthController";
import BaseRoute from "./BaseRoute";
import validate from "../validators/AuthValidator";
import { auth } from "../middlewares/AuthMiddleware";

class AuthRoute extends BaseRoute
{
    public routes() : void
    {
        this.router.post("/login", validate, AuthController.login);
        this.router.post("/register", validate, AuthController.register);
        this.router.get("/profile", auth, AuthController.profile);
    }
}

export default new AuthRoute().router 