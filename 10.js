// import the events module
const EventEmitter = require('events');
// create a new object 
const emitter = new EventEmitter()

// Subscribe to an event
emitter.on(
    'emit1', (a,b) => {
        console.log(`${a} ${b}`);
    }
)

// emit the event with arguments
emitter.emit(
    'emit1', 'Parimal' , 'Srivastava'
)