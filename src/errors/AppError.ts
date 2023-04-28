export class AppError {
  // public: can be accessed from anywhere
  // readonly: but cannot be changed
  //   message is of type string
  public readonly message: string;

  public readonly statusCode: number;

  //   constructor: a method that is called when a class is instantiated
  constructor(message: string, statusCode = 400) {
    // this.message = message: the message property of the class is equal to the message that was passed as a parameter
    this.message = message;
    this.statusCode = statusCode;
  }
}
