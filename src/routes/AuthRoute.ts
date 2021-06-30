
import AuthController from "../controllers/AuthController";
import BaseRoute from "./BaseRoute";

class AuthRoute extends BaseRoute
{
    public routes() : void
    {
        this.router.post("/login", AuthController.login);
        this.router.post("/register", AuthController.register) ;
    }
}

export default new AuthRoute().router 