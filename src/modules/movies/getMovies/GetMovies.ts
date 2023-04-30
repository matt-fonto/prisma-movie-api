import { Movie } from "@prisma/client";
import { prisma } from "../../../prisma/client";

export class GetMovies {
  async execute(): Promise<Movie[]> {
    // Get all movies from the database
    const movies = await prisma.movie.findMany({
      orderBy: {
        releaseDate: "desc",
      },
      // include in the respose, the user's name and email who rented the movie
      include: {
        MovieRent: {
          select: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    return movies;
  }
}
