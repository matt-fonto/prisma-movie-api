import { Movie } from "@prisma/client";
import { AppError } from "../../../errors/AppError";
import { prisma } from "../../../prisma/client";
import { CreateMovieDTO } from "../DTO/CreateMovieDTO";

export class CreateMovie {
  // title, duration, release_date}: CreateMovieDTO: we assign the DTO to the execute method, so we can use the properties from the DTO inside the execute method.
  async execute({
    title,
    duration,
    releaseDate,
  }: CreateMovieDTO): Promise<Movie> {
    // Verify if movie exists
    const movieAlreadyExists = await prisma.movie.findFirst({
      where: {
        title,
      },
    });

    if (movieAlreadyExists) {
      throw new AppError("Movie already exists");
    }

    const movie = await prisma.movie.create({
      data: {
        title,
        duration,
        releaseDate,
      },
    });

    return movie;
  }
}
