import { Request, Response } from "express";
import { GetMovies } from "./GetMovies";

export class GetMoviesController {
  async handle(req: Request, res: Response) {
    const getMovies = new GetMovies();

    const result = await getMovies.execute();

    return res.status(200).json(result);
  }
}
