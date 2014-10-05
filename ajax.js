// Inspired by: http://jaskokoyn.com/2013/09/06/ajax-advanced-javascript-tutorial/

///////////////////////////////////////
// AJAX: Asynchronous JavaScript XML //
//////////////////////////////////////

// Traditional websites would load a different page every time you needed to
// make a request to a different page or file. With AJAX, you can stay on the
// same page and in the background JavaScript will make a request to a different
// page and load it’s data. You can then choose what to do with the data. You can
// load images, process forms, and anything you can imagine.

// In the old days, AJAX was mimicked using frames and iframes. Now the whole
// process has been simplified with AJAX. Let’s learn how to perform AJAX requests.
// Clear your script and add this bit of code.

// Make a new AJAX request

var req = new XMLHttpRequest();

// Set up the AJAX Request
// (TypeOfRequest, URLToTheFile, Async/Sync)
req.open( "GET", 'filename.txt', false );

// We are now using an event in the XMLHttpRequest object called onreadystatechange.
// This event fires when the readyState property changes. This property can have 5 possible values.
// 0 – The default value when the XMLHttpRequest object is created.
// 1 – The open() method has been called.
// 2 – The send() method has been called.
// 3 – Some data has been retrieved, but the request isn’t finished.
// 4 – All data has been retrieved and the request is finished.

req.onreadystatechange = function() {
  if( req.readyState == 4 && req.status == 200 ) {
    document.write( req.responseText );
  }
}

// Now we can actually make our request

req.send();


////////////
// JSONP //
///////////


// JSONP stands for “JSON with Padding” and it is a workaround
// for loading data from different domains. It loads the script into
// the head of the DOM and thus you can access the information as if
// it were loaded on your own domain, thus by-passing the cross domain issue.





























