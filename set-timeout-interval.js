'use strict';

function tryThis() {
  // Log the DateTime every second
  var intervalId = setInterval(function() {
    console.log(new Date());
  }, 1000);

  // Stop Logging after 6 seconds
  setTimeout(function() {
    console.log('All Done!');
    clearInterval(intervalId);
  }, 6000);
}

tryThis();