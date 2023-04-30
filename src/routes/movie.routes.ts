import { Router } from "express";
import { CreateMovieController } from "../modules/movies/createMovie/createMovieController";
import { CreateMovieRentController } from "../modules/movies/createMovieRent/CreateMovieRentController";

// initialize the CreateMovieController class to handle the request and response
const createMovieController = new CreateMovieController();
const createMovieRentController = new CreateMovieRentController();

// Create a new instance of routes from express to handle the routes
const movieRoutes = Router();

// once the client makes a request to the /movies route, the createMovieController will handle the request
movieRoutes.post("/", createMovieController.handle);
movieRoutes.post("/rent", createMovieRentController.handle);

export { movieRoutes };
