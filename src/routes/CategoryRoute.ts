import CategoryController from "../controllers/CategoryController";
import { auth } from "../middlewares/AuthMiddleware";
import BaseRoute from "./BaseRoute";
import validate from "../validators/CategoryValidator";

class CategoryRoute extends BaseRoute
{
    public routes(): void
    {
        this.router.get("/", auth, CategoryController.index);
        this.router.post("/", auth, validate, CategoryController.create );
        this.router.put("/:id", auth, validate, CategoryController.update);
    }
}

export default new CategoryRoute().router;