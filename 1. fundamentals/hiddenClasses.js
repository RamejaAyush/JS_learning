// link to video: https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13760064#content

function Animal(x, y) {
  this.x = x;
  this.y = y;
}

// creating objects
const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

// if we assign by giving properties
obj1.a = a;
obj1.b = b;

obj2.b = b;
obj2.a = a;

// but If we assign properties like this it will run slower because of hidden classes used in compiler. Compiler will see obj1 and obj2 are using same classes but if we assign in a reverse order, the compiler confuses and creates two diffrent hidden classes for each and thats creates the delay.

// to create a optimized code and to avoid this situation use contrustore to declare the properties

// ! there is also one case.
// If we use delete keyword It also create delays in compiling

delete obj1.a;

// * to make sure are writing optimised code just write predictable code not for just humans, for machine also. so, it will not confuse the compiler and compilation will be fast.
