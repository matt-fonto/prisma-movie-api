import { Request, Response } from "express";
import { CreateUser } from "./createUser";

// Controller is responsible for receiving the request, calling the service and returning the response.
export class CreateUserController {
  // The handle method is responsible for receiving the request and returning the response.
  async handle(req: Request, res: Response) {
    // Get the name and email from the request body
    const { name, email } = req.body;

    // Create a new instance of the CreateUser service
    const createUser = new CreateUser();

    // Call the execute method from the CreateUser service
    const result = await createUser.execute({ name, email });

    return res.status(201).json(result);
  }
}
