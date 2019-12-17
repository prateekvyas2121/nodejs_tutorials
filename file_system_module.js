//file system module allows us to CRUD files in system.
const fs = require('fs');
// fs.writeFile("example.txt","this is an example txt file",(error) => {
// 	if (error) {
// 		console.log(error);
// 	}
// 	else{
// 		console.log("worked hurray!!");
// 		fs.readFile('example.txt','utf8',(error,file) => {
// 			if (error) {
// 				console.log(error);
// 			}
// 			else{
// 				console.log(file);
// 			}
// 		});
// 	}
// })

//RENAME A FILE
// fs.rename('example.txt','testing.txt',(error) => {
// 	if (error) {
// 		console.log(error);
// 	}
// 	else{
// 		console.log("successfully renamed!!!!")
// 	}
// });

//APPEND DATA TO THE FILE
// fs.appendFile("testing.txt","appended successfully bro",(error)=>{
// 		if (error) {
// 			console.log(error);
// 		}
// 		else{
// 			console.log("you appended the data successfully !!!");

// 		}
// });
 
 //UNLINK THE FILE
 // fs.unlink("testing.txt",(error) => {
 // 	if (error) {
 // 		console.log("error is this =>",error);
 // 	}
 // 	else{
 // 		console.log("deleted file successfully");
 // 	}
 // });