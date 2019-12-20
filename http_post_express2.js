//part 2 of validation with express and joi
// in this tutorial we'll how to validate a nested object and an array

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
const Joi = require('joi');


const arrayString = ['banana' , 'bacon' , 'cheese'];
const arrayObjects = [{example: 'example1'},{example: 'example2'}];
// we gonna simulate the user's request
const userInput = {
	personalInfo:{
		streetAddress:'123345',
		city:'jaipur',
		state:'Rajasthan'
	},
	preferences : arrayString,
	preferencesArrayObjects : arrayObjects
};
// we'll first develop a personalInfo schema and then we'll develop a preferences schema
 const personalInfoSchema = Joi.object().keys({
 	streetAddress:Joi.string().trim().required(),
 	city:Joi.string().trim().required(),
 	state:Joi.string().trim().length(9).required()

 });

 const preferencesArrayObjectsSchema = Joi.array().items(Joi.object().keys({
 	example : Joi.string().length(2).required()
 }));

 const preferencesSchema = Joi.array().items(Joi.string());//items()....helper method takes in a argument is basically any schema you want...in this we want to validate a array of strings so we use Joi.string()..this will make sure that all the items within the array are strings

 // now we'll combine both the schemas
 const schema = Joi.object().keys({
 	personalInfo:personalInfoSchema,
 	preferences:preferencesSchema,
 	preferencesArrayObjects:preferencesArrayObjectsSchema
 });

 Joi.validate(userInput,schema,(error,result) => {
 	if (error) {
 		console.log(error);

 	}
 	else{
 		console.log(result);
 	}
 });

 //next we'll start with ejs templates with express.... got to "ejs_templates_express.js"....