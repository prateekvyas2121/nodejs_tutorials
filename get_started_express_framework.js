//working with express get requests

//learning more about http get request....and query string and route parameters..

// const express = require('express');

// const app = express();

// app.get("/",(req,res) => {
// 	res.send("hello world this is the basic usage of express by prateek vyas !")
// });
// app.listen(3000);

// app.get("/example",(req,res) => {
// 	res.send("Hitting example route by prateek vyas !")
// });

//now let's learn about route parameters
// app.get("/example/:name/:age",(req,res) => {
// 	// res.send("Hitting example route by prateek vyas !")
// 	console.log(req.params);
// 	// res.send("example of route params by prateek vyas !");
// 	res.send(req.params.name + ":" + req.params.age);
// });

//let's learn about query string parameters....
// app.get("/example/:name/:age",(req,res) => {
// 	// res.send("Hitting example route by prateek vyas !")
// 	console.log(req.params);
// 	console.log(req.query);
// 	// res.send("example of route params by prateek vyas !");
// 	res.send(req.params.name + ":" + req.params.age);
// });

//next we'll learn about serving static files with express..for that we'll require a path module..it is basically a utility module that deals with path
// const path = require('path');
// app.use('/public',express.static(path.join(__dirname,'static')));//app.use() means i am using midddleware
//app.use(alias,middleware function )
//__dirname is a string this gonna give us where get_started_express_framework.js is located..
// app.get("/",(req,res) => {
// 	res.sendFile(path.join(__dirname,'static','index.html'));
// });
// app.listen(3000);

//next we'll learn about http post request using express go to "http_post_express.js".....