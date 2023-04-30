import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { routes } from "./routes";
import { AppError } from "./errors/AppError";

// Create a new instance of express
const app = express();

// Tell express to use JSON
app.use(express.json());

// Tell express to use the routes we created
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // If the error is a known error, return the error message and status code
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  // else, it's not a known error, so return a generic error message and status code
  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// 25:03
