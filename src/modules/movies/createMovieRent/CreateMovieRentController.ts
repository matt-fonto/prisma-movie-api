import { Request, Response } from "express";
import { CreateMovieRent } from "./CreateMovieRent";

export class CreateMovieRentController {
  async handle(req: Request, res: Response) {
    // get the movieId and userId from the request body
    const { movieId, userId } = req.body;

    // Create a new instance of the CreateMovieRent class
    const createMovieRent = new CreateMovieRent();

    // Execute the createMovieRent method from the CreateMovieRent class
    const result = await createMovieRent.execute({ movieId, userId });

    return res.status(201).send();
  }
}
