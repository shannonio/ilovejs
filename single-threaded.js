// JavaScript is Single Threaded
// which means only one line of code can execute at a time
// and generally javascript executes each line of code in order
// setTimeouts do not block the execution because they are scheduled events 
// that happen at a later date
// however, if two setTimeouts were to occur at the same time
// JavaScript could only execute one at a time
// So one would still execute before the other