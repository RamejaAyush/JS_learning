//  stack overflow happen when there is a loop of call the same thing. like If you call same thing again and again and again so it will doing same thing so the call stack is basically runing the same thing and the program will crash so if this condition happens we see a error message.

// Uncaught RangeError: Maximum call stack size exceeded <- this error

// It can be caused very easily by using recursion
function run() {
  run();
}

run(); // Uncaught RangeError: Maximum call stack size exceeded

// this condition can also happen when we are calling way to many function at the same time.
