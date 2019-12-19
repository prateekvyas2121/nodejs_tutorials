//WE'LL CREATE A HTTP SERVER USING HTTP MODULE
//HTTP MODULE ALLOWS US TO DO IS BASICALLY CREATE A WEBSEVER WITH NODEJS

// const http = require('http');
// //now from here we can call method called createServer and this gonna give us httpServer object..
// // req = request object 
// // res = response object
// const server = http.createServer((req,res) => {
// 	if(req.url == '/'){
// 		res.write("Hello World from Nodejs");
// 		res.end();
// 	}
// 	else{
// 		res.write("using other domain");
// 		res.end();
// 	}
// });

// server.listen("3000");//and now run localhost:3000 on browser

// SERVING STATIC FILES HTTP AND FILE SYSTEM MODULES

// NOW IN THIS TUTORIAL WE ARE GOING TO LEARN HOW TO INSERT STATIC FILES USING THE HTTP AND FILE SYSTEM MODULE

// const http = require('http');
// const fs = require('fs');	
// http.createServer((req,res) => {
// 	const readStream = fs.createReadStream("./static/index.html");
// 	//now what i'm gonna do is actually write a header for my response...header is responsible for let the client know what kind of data 
// 	res.writeHead(200,{'Content-type': 'text/html'});
// 	readStream.pipe(res);
// }).listen('3000');

// const http = require('http');
// const fs = require('fs');	
// http.createServer((req,res) => {
// 	const readStream = fs.createReadStream("./static/example.json");
// 	//now what i'm gonna do is actually write a header for my response...header is responsible for let the client know what kind of data 
// 	res.writeHead(200,{'Content-type': 'application/json'});
// 	readStream.pipe(res);
// }).listen('3000');


const http = require('http');
const fs = require('fs');	
http.createServer((req,res) => {
	const readStream = fs.createReadStream("./static/20170110000414_IMG_9700.JPG");
	//now what i'm gonna do is actually write a header for my response...header is responsible for let the client know what kind of data 
	res.writeHead(200,{'Content-type': 'image/jpg'});
	readStream.pipe(res);
}).listen('3000');


//NEXT WE'LL CREATE package.json USING npm init

//package.json file is responsible for basicaclly holding all our meta data for a project.....
//then now we'll install packages using npm...