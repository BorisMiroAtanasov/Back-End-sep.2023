const EvetEmitter = require('events');
const eventEmitter = new EvetEmitter();


eventEmitter.on("kitten added",() =>{
    console.log("kitten has been added");
});
eventEmitter.on("kitten added",(kittenName, age) =>{
    console.log(`kitten has been added. Second time.Its name is ${kittenName} and is ${age} years old`);
});
eventEmitter.on("kitten removed",() =>{
    console.log("kitten has been removed");
});

eventEmitter.emit("kitten added","Puffy",8);
eventEmitter.emit("kitten removed");


