const fs = require('fs');

// Copy
const readStream = fs.createReadStream('./input.txt');
const writeStream = fs.createWriteStream('./output.txt');

// react on read Stream

readStream.on('data', (chunk) =>{
    //write in the stream
    writeStream.write(chunk)
});


readStream.on('end', () =>{
    console.log('I have finished reading');
    writeStream.end()
});