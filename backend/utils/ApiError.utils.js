// this ApiError is the extended class which means it is the subclass of Error and we inherit all the methods and  properties of the Error in this.

class ApiError extends Error {
  constructor(
    statusCode,
    message = "Somthing went wrong",
    errors = [],
    stack = ""
  ) {
    super(message); //super clas is used to call the contructor of parent class because "this" will not work if parent is not called
    this.statusCode = statusCode;
    this.errors = errors;
    this.success = false;
    this.message = message;
    this.data = null;

    if (stack) {
      // stack is the place where errors happen in our code so we use this to trace the error
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}


export {ApiError}