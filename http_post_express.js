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