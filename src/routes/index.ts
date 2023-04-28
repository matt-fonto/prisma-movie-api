import { Router } from "express";

import { userRoutes } from "./user.routes";
import { movieRoutes } from "./movie.routes";

// Create a new instance of routes from express to handle the routes
const routes = Router();

// Tell express to use the routes we created
routes.use("/users", userRoutes);
routes.use("/movies", movieRoutes);

export { routes };
