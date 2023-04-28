import { User } from "@prisma/client";
import { prisma } from "../../../prisma/client";
import { CreateUserDTO } from "../DTO/CreateUserDTO";
import { AppError } from "../../../errors/AppError";
// DTO: Data Transfer Object, which is an object that defines how the data will be sent over the network.
// This is a good practice to use DTOs to define the shape of the data that will be sent.

export class CreateUser {
  async execute({ name, email }: CreateUserDTO): Promise<User> {
    // Verify is user exists
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists");
    }

    // If not, create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return user;
  }
}
