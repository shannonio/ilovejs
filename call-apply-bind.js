'use strict';

// Set up a simple object to use as "context"
var context = { foo: "bar" };

// A function that uses a reference to a variable called "foo"
// on the "this" context.
function returnFoo () {
  return this.foo;
}

// This variable does not exist on scope, so is undefined.
returnFoo(); // => undefined

// But if we bind the function to the context.
var bound = returnFoo.bind(context);

// The name variable is now in scope.
bound(); // => "bar"

//
// That's what Function.prototype.bind does. Since returnFoo
// is a function, it inherits the function prototype.
//
// If you enjoyed that, keep reading. It just gets better.
//

// There are many ways of attaching a context to a function.
// Call and apply let you call a function with a given context.
returnFoo.call(context); // => bar
returnFoo.apply(context); // => bar

// Including adding the function to the object.
context.returnFoo = returnFoo;
context.returnFoo(); // => bar

//
// Now let's get freaky with it.
//

// Array.prototype has this sweet method called slice.
// You call it on an array, and it gives you a copy of
// the array from start index to end index (exclusive).
[1,2,3].slice(0,1); // => [1]

// So we grab slice and assign it to a local variable.
var slice = Array.prototype.slice;

// slice is now "unbound". As Array.prototype.slice usually
// acts on the context it is given, or "this", it will
// no longer work.
slice(0, 1); // => TypeError: can't convert undefined to object
slice([1,2,3], 0, 1); // => TypeError: ...

// But if we recall apply and call, they let us supply a context.
slice.call([1,2,3], 0, 1); // => [1]

// Apply works like call, but takes arguments as an array.
slice.apply([1,2,3], [0,1]); // => [1]

// It sure gets old using .call though. What if we bind it?
// That's right! Let's bind "call" to slice. Yes.
slice = Function.prototype.call.bind(Array.prototype.slice);

// Now slice uses the first argument as context.
slice([1,2,3], 0, 1); // => [1]

//
// Pretty cool huh? But I got one last thing for you.
//

// Let's put "bind" itself through the same process
// we did "slice".
var bind = Function.prototype.call.bind(Function.prototype.bind);

// Wrap your mind around that. Think about it.
// What does it do? We are flipping "call",
// returning a function that takes a function
// and a context and returning a fully bound function.

// Bringing back our original example.
var context = { foo: "bar" };
function returnFoo () {
  return this.foo;
}

// And using our new amazing "bind".
var amazing = bind(returnFoo, context);
amazing(); // => bar

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind\\\\