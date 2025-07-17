const EventEmitter = require("events");

const myFirstEmitter = new EventEmitter();

//  register a listener -->
myFirstEmitter.on("greet", (name) => {
  console.log(`Hello ${name}`);
});

// Call the event (Emit the Listeners) --> 
myFirstEmitter.emit('greet', 'Gaurav Jangir');