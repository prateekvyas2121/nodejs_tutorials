//IN THIS WE'RE GONNA LEARN ABOUT READABLE AND WRITEABLE STREAMS ...
const fs = require('fs');
// fs.createReadStream('./example_folder',(error) => {
// 	// console.log(error);
// });

const readStream = fs.createReadStream('./example.txt','utf8');
//now we can do is listen for an event..
//readStream object inherits from the eventEmitter class so it means we can listen for event..
const writeStream = fs.createWriteStream('./example1.txt','utf8');

readStream.on('data',(chunk) => {
	// if (true) {
	// }else{}
	// console.log(chunk);
	writeStream.write(chunk);
});