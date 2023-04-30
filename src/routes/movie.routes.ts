import { Router } from "express";
import { CreateMovieController } from "../modules/movies/createMovie/CreateMovieController";
import { CreateMovieRentController } from "../modules/movies/createMovieRent/CreateMovieRentController";
import { GetMoviesController } from "../modules/movies/getMovies/GetMoviesController";

// Create a new instance of routes from express to handle the routes
const movieRoutes = Router();

// GET - READ
const getMoviesController = new GetMoviesController();

movieRoutes.get("/", getMoviesController.handle);

// CREATE - POST
// once the client makes a request to the /movies route, the createMovieController will handle the request
// initialize the CreateMovieController class to handle the request and response
const createMovieController = new CreateMovieController();
const createMovieRentController = new CreateMovieRentController();

movieRoutes.post("/", createMovieController.handle);
movieRoutes.post("/rent", createMovieRentController.handle);

export { movieRoutes };
