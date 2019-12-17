//Readline module allows us to prompt as well as get the input from the user ..
const readline = require('readline');//this will give us readline module.
//next we're gonna have to create an instance of the readline interface by using createInterface method.

// createInterface(Object)
const rl = readline.createInterface({
	input : process.stdin,
	output: process.stdout
});//when this method executed it's gonna return readline interface object
let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;
rl.question(`What is ${ num1 }+${ num2 }? \n`,(userInput) => {
	if(userInput.trim() == answer){
		rl.close();//when we call the method close it emits the close event
		}
	else{
		// console.log("wrong");
		// rl.close();
		rl.setPrompt("incorrct answer try again please \n");
		rl.prompt();
		rl.on('line',(userInput) => {//line event keeps executing until .close() method is called
				if(userInput.trim() == answer){
				rl.close();//when we call the method close it emits the close event
				}
				else{
					rl.setPrompt("incorrct hai answer try again please \n");
					rl.prompt();

				}
			});
		}
	});
//now what i wanna do is add a listener to the close event
//readline interface is actually is the instance of eventemitter class
rl.on('close',() => {
	console.log("correct");
})