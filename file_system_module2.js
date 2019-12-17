// in this tutorial we're gonna learn about how to work with folders with this file system module...
const fs = require('fs');
// fs.mkdir('tutorials_testing_folder',(error) => {
// 	if (error) {
// 		console.log(error);
// 	}
// 	else{
// 		// console.log('Folder successfully created!!!!!!');
// 		// fs.rmdir('tutorials_testing_folder',(error) => {
// 		// 	if (error) {
// 		// 		console.log(error);
// 		// 	}
// 		// 	else{
// 		// 		console.log("successfully deleted the folder!!!!");
// 		// 	}
// 		// });
// 		fs.writeFile('./tutorials_testing_folder/testing_file.txt','testing data',(error) => {
// 			if (error) {
// 				console.log(error);
// 			}
// 			else{
// 				console.log("files created successfully inside tutorial folder !!!");
// 			}
// 		});
// 	}
// });

// HOW TO REMOVE A FOLDER IF IT CONTAINS A FILE OR WE CAN SAY IF IT'S NOT EMPTY//
//first delete the file 
	// fs.unlink('./tutorials_testing_folder/testing_file.txt',(error) => {
	// 	if (error) {
	// 		console.log(error);
	// 	}
	// 	else{
	// 		console.log("file deleted inside the folder");
	// 		fs.rmdir('tutorials_testing_folder',(error) => {
	// 			if (error) {
	// 				console.log(error);
	// 			}
	// 			else{
	// 				console.log("folder too deleted yipee");
	// 			}
	// 		});
	// 	}	
	// });

// HOW TO REMOVE A FOLDER IF IT CONTAINS MORE THAN ONE FILE OR WE CAN SAY IF IT'S NOT EMPTY//
// example_folder
// example1.txt
//readdir gives the list of files in the directory we are mentioning in the readdir function..

fs.readdir('example_folder',(error,files) => {
	if (error) {
		console.log(error);
	}
	else{
		// console.log(files);

		for(let file of files){
			fs.unlink('./example_folder/' + file,(error) => {
				// console.log(file,"deleted");
				if (error) {
					console.log(error);
				}
				else{
					console.log(file,"deleted");
				}
			});
		}
	}
});

//end of tutorials.....