import { Request, Response } from "express";
import { GetUsers } from "./GetUsers";

export class GetUsersController {
  async handle(req: Request, res: Response) {
    const getUsers = new GetUsers();

    const result = await getUsers.execute();

    return res.status(200).json(result);
  }
}
