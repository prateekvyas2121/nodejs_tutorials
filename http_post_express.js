// in this tutorial we'll learn about http post request using express.....
// it is basically used on forms .....
const express = require('express');
const path = require('path');
const app = express();
	
// app.use('/public',express.static(path.join(__dirname,'static')));
app.get("/",(req,res) => {
	res.sendFile(path.join(__dirname,'static','index.html'));
});
app.listen(3000);

//let's use a module that's going to parse the form data for us and that module is called "body parser module"
// to get started we have to install this module "npm install  body-parser" 
//now we'll require it in our application
const bodyParser = require('body-parser');
//now we'll use middleware 
app.use(bodyParser.urlencoded({extended:true})); //syntax => urlencoded({some option})//this is allowing us to parse  url encoded form

//it parses the data for us and attaches it to ther request.body  extended option is set to false because we are not dealing with any complicated data(or objects)....all we want is email and password which are both strings...
// now let's code our app.post http request
	// app.post("/",(req,res) => {
	// 	//body parser parses the data for us and attaches it to the body element..
	// 	console.log(req.body);//this is gonna give us an object with the properties of email and password......
	// 	//database related work start's here......
	// 	res.send("successfully posted the data.....!!!!");
	// });//code for default submission....
//next we'll learn how to work with jsin data using express and body parser

//for non default behaviour of form submission....
// start
// app.use(bodyParser.json());//our express apoplication have handle url encoded data....
// // (.json()) will parse the json and will attach it to our request.body....
//  app.post("/",(req,res) => {
// 		console.log(req.body);
// 		res.json({
// 			success: true
// 		});
// 	});
// end

//next we'll learn how to validate user input with express and joi....for that we'll install joi "npm install joi" ....
//requiring it in our application....
const Joi = require('joi');
// app.use(bodyParser.json());//our express apoplication have handle url encoded data....
// (.json()) will parse the json and will attach it to our request.body....
 app.post("/",(req,res) => {
		// console.log(req.body);
		//here we're going to validate that data which we're getting from req.body
		// for that we need to create schema
		// schema = schema is basically a blueprint or a set of rules that we want our data to have....
		const schema = Joi.object().keys({
			email: Joi.string().trim().email().required(),//it means the email field must be a string value
			password: Joi.string().min(5).max(10).required()
		});//now we're ready with our bluprint let's actually use it ....

		Joi.validate(req.body,schema,(error,result) => {
			if (error) {
				console.log(error);
				res.send("An error Has Ocuured =>");

			}
			else{
				console.log(result);
				res.send("successfully yes posted the data....");
			}
		});//syntax = Joi.validate(Object that you wanna validate,blueprint(schema),callback function)
	});
 //for part 2 of validation go to http_post_express2.js
 