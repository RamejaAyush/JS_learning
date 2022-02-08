// garbage collection is a feature offered by the engine so in case the program is being executed so it will basically deleted the variable memory if not needed.

// We all know memory is limited. If the allocated memory is not managed properly it can create memory leaks.

// in low level languages like c, we can handel our garbage collection that is what creates c a fast programing language.

// In our case JavaScript uses mark and sweep algorithm so If we have dont need the memory after allocation. It basically marks that memory and sweep it so it is deleted.

// for example
const obj = {
  name: "Ayush",
  age: 21,
};

// and we redeclare it
obj = "Ayush Rameja";

// now the above variable memory will be deleted after the mark and sweep algorithm
