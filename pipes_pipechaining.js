// pipe allows us to do is basically taker a  Source stream whic is just a ReadableStream and send it over to its destination whic is just a writeable stream.........

//the below code is from readable_writeable_streams.js
// start
// const readStream = fs.createReadStream('./example.txt','utf8');
// //now we can do is listen for an event..
// //readStream object inherits from the eventEmitter class so it means we can listen for event..
// const writeStream = fs.createWriteStream('./example1.txt','utf8');

// readStream.on('data',(chunk) => {
// 	// if (true) {
// 	// }else{}
// 	// console.log(chunk);
// 	writeStream.write(chunk);
// });
//end

// we can change it to the below 
// const fs = require('fs');

// const readStream = fs.createReadStream('./example.txt','utf8');
// //now we can do is listen for an event..
// //readStream object inherits from the eventEmitter class so it means we can listen for event..
// const writeStream = fs.createWriteStream('./example1.txt','utf8');

// readStream.pipe(writeStream);//see how amazing pipes are !!!!!

//NOW LET'S TALK ABOUT PIPE CHAINING...FOR THAT WE'LL REQUIRE 2 MODULES 'fs' AND 'zlib	'
const fs = require('fs');
const zlib = require('zlib');//this module is basically for compression of files.
//now we're gonna create a transformed stream..transformed stream basically takes the input from for eg.  readStream  and when it recieves the data it manipulates the data into something else....
const gzip = zlib.createGzip() ;//this will return the tranformed string..

const readStream = fs.createReadStream('./example.txt','utf8');
const writeStream = fs.createWriteStream('./example1.txt.gz');

// readStream.pipe(gzip).pipe(writeStream);//this is pipe chaining...in this we compressed the file and piped it to the example1.txt.gz....

//NOW WE'LL DO THE REVERSE OF WHAT WE JUST DID ...IT MEANS WE'LL UNZIPP THE FILE(SOURCE) AND WRITE IT TO THE SOME FILE(DESTINATION).... 

const gunzip = zlib.createGunzip() ;//this will return the unzipped string..
const readStream = fs.createReadStream('./example1.txt.gz');
const writeStream = fs.createWriteStream('./example.txt');
readStream.pipe(gunzip).pipe(writeStream);