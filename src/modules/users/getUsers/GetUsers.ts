import { User } from "@prisma/client";
import { prisma } from "../../../prisma/client";

export class GetUsers {
  async execute(): Promise<User[]> {
    const users = await prisma.user.findMany({
      orderBy: {
        name: "asc",
      },
      include: {
        movieRent: {
          select: {
            movie: {
              select: {
                title: true,
              },
            },
          },
        },
      },
    });

    return users;
  }
}
