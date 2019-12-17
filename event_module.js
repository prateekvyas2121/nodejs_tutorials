//IN THIS I LEARN EVENT MODULE AND PARTICULARLY EVENT EMITTER CLASS
//all the event module allows us to do is basically bring event driven programming to node.js
//to get started we have to require event module which is inbuilt in nodejs
 const EventEmitter = require('events');//now this is the class we get from requiring event module.
 const eventEmitter = new EventEmitter();//create new instance of EventEmitter

 //now from here we start event driven programming.
 //now we eventEmitter object ..we gonna add listener to it.

// on(listener,function)it will execute the function when listener event occurs.
eventEmitter.on('tutorial',(num1,num2) => {
 	console.log('sum is =>',num1 + num2);
});
eventEmitter.emit('tutorial',1,4);
//HOW WE CREATE A CUSTOM OBJECT which takes adantage of using events ....i can just inherit from the eventEmitter class
class Person extends EventEmitter{
	constructor(name){
		super();//super() allows us to use 'this' property within our class
		// if we not use super() we will get this error => ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor.
		this._name = name;
	}

	get name(){//getter in javascript
		return this._name;
	}
}
let pratik = new Person('vyas');
pratik.on('listener',()=>{
	console.log("I am =>",pratik.name)
});
pratik.emit('listener');
//let it be a girl
let isha = new Person('isha');
isha.on('ji',()=>{
	console.log("I am =>",isha.name)
});
isha.emit('ji');