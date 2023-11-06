
const fs = require('fs');
//stream
const readStream = fs.createReadStream("./input.txt", {
//highWaterMark:10000 , може да задаваме размера на chunk - по настройка е 65 mB 
    encoding: 'utf8'
});

// events 
readStream.on('data', (chunk)=> {
    console.log(chunk);
});

readStream.on('end', ()=> {
    console.log('Reading has finished!');
});
