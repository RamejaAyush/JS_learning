// well memory leaks are caused but what not to do if we are writing a JavaScript code.

// Do not use global variables
var a = "yoga";
var b = "cat";
var a = "football";

// too many eventlisteners
document.getElementById("button").addEventListener("onclick", doSomething);

// using setinterval
setInterval(() => {
  // the logic
}, 100);

// well all these exampled makes JavaScript remembers the memory and I will creates memory leak.
