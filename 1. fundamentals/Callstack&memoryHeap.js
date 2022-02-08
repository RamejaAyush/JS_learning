// Call stack and Memory Heap

// memory heap it is place where we can allocate memory, use memory or release memory because at the end program is just read and writing operation.

// call stack is place where we keep the track of program. for ex: which function is being executed.

// these both things can be done by the ECMAScript engine. where memory heap store the data and call stack used to get the progress.

// how allocation works

const number = 100; // allocates memory to the number variable
const string = "ayush"; // allocates memory to the string variable

const obj = {
  name: "Ayush",
  age: 21,
}; // allocate memory for an object

// memory heap is simple Consider it as a store where memory is stored in a unordered fashion. That is what ECMAScript engine does.

// But how Call Stack helps?
// Call Stack basically gets the current state of the program. like:
// what function is currently running?
// what expression is currently executing?

// we can see that
// for example

// a calc function
function calc() {
  const expression = 6 + 9;
  return expression;
}

// invoking it
calc();

// when we run this calc function. calc() function comes at the top in call stack. when the function in executed call stack just removes it.

// it means whatever is in the top of call stack is basically running.
