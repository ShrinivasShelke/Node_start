const EventEmitter=require('events');
const { emit } = require('process');
const emitter= new EventEmitter();
emitter.addListener('onEvent',function(arg){
    console.log("this is my onEvent event",arg)
})

emitter.emit(('onEvent'),{id:1,work:"job"});