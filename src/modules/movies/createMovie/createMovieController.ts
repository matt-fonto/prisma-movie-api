import { Request, Response } from "express";
import { CreateMovie } from "./createMovie";

// Handle the request and response from the client
export class CreateMovieController {
  async handle(req: Request, res: Response) {
    // destructuring the request body with the necessary properties
    const { title, duration, releaseDate } = req.body;

    // Create a new instance of the CreateMovie class
    const createMovie = new CreateMovie();

    // Execute the createMovie method from the CreateMovie class
    const result = await createMovie.execute({ title, duration, releaseDate });

    return res.status(201).json(result);
  }
}
