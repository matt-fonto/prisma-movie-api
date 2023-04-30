import { MovieRent } from "@prisma/client";
import { CreateMovieRentDTO } from "../DTO/CreateMovieRentDTO";
import { prisma } from "../../../prisma/client";
import { AppError } from "../../../errors/AppError";

export class CreateMovieRent {
  async execute({ movieId, userId }: CreateMovieRentDTO): Promise<void> {
    //verify if movie exists
    const movie = await prisma.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    if (!movie) {
      throw new AppError("Movie does not exist");
    }

    //verify if user exists
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new AppError("User does not exist");
    }

    // create movie rent
    // prisma.movieRent = it is the name of the model
    const movieRent = await prisma.movieRent.create({
      data: {
        movieId,
        userId,
      },
    });
  }
}
