const fs = require('fs');


const writeStream = fs.createWriteStream('./output.txt');

writeStream.write("Chunk1");
writeStream.write("Chunk2");
writeStream.write("Chunk3");
writeStream.write("Chunk4");
writeStream.end();

