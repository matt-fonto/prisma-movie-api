import { Router } from "express";
import { CreateUserController } from "../modules/users/createUser/CreateUserController";
import { GetUsersController } from "../modules/users/getUsers/GetUsersController";

const userRoutes = Router();

// GET - READ
const getUserController = new GetUsersController();
userRoutes.get("/", getUserController.handle);

// CREATE - POST
const createUserController = new CreateUserController();
userRoutes.post("/", createUserController.handle);

export { userRoutes };
