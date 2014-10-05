'use strict';

// Closures are basically a fancy term for javascripts
// block (or function) scoping
// The enable the use of the module design pattern commonly used in javascript

var thisIsAClosure = function thisIsAClosure() {
  var thisVariableWillOnlyBeAvailableInTheClosure = 'closure foo';

  function innerFunction() {
    return thisVariableWillOnlyBeAvailableInTheClosure;
  }

  innerFunction();
};

thisIsAClosure(); // 'closure foo'
thisVariableWillOnlyBeAvailableInTheClosure; //undefined


var interestingClosure = function interestingClosure(x) {
  return function(y) {
    return x+y;
  }
}

var add5 = interestingClosure(5); //This is one closure
var add10 = interestingClosure(10); // and this is a seperate closure

// add5 and add10 each have their own environment to store declarations

add5(11); // 16
add10(11); // 21