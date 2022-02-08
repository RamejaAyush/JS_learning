// JS is a single treaded language as we can we it has only once call stack. So, once work at one time

// JavaScript run time is divided in 3 parts.
// call stack and memory heap
// Web API
// Callback queue and event looping

// call back and memory heap is already explained but there is one thing which is diffrent. functions like setTimeout() and DOM doesnt executed by normal JS. they are executed by web API

// When we console.log(window) then we can see what web API offers like all the functions etc

// so what happens if we write web API functions in normal JS file?
// The code is not understood by normal JS it added in callStack and when to web API afterwards It executes in web API and went to callback queue.

// when the code is executed in callback queue then event looping comes into play. event looping contiuously checks if the call stack is empty or not. If yes then It went back to call stack and the remain is executed and that is what JS runtime is.

// ? so which code has the most priority? call stack or web API?

// lets code it

console.log(1);
setInterval(() => {
  console.log(2);
}, 1000);
console.log(3);

// output
// 1
// 3
// 2

// because setInterval is a Web API function so It went to callBack queue, then event looping and then call stack. It doesnt matter how fast web API is it always executes in the end.

// ? what if we enter 0 interval in the above example
// nothing changes still gets the same output becuase of the same reason.

console.log(1);
setInterval(() => {
  console.log(2);
}, 0);
console.log(3);

// output
// 1
// 3
// 2

// fun: http://latentflip.com/loupe/?code=ZnVuY3Rpb24gcHJpbnRIZWxsbygpIHsNCiAgICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBiYXonKTsNCn0NCg0KZnVuY3Rpb24gYmF6KCkgew0KICAgIHNldFRpbWVvdXQocHJpbnRIZWxsbywgMzAwMCk7DQp9DQoNCmZ1bmN0aW9uIGJhcigpIHsNCiAgICBiYXooKTsNCn0NCg0KZnVuY3Rpb24gZm9vKCkgew0KICAgIGJhcigpOw0KfQ0KDQpmb28oKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
