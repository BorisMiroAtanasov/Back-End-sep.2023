const eventBus = require('./event-bus');

eventBus.subscribe("kitten added",() =>{
    console.log("kitten has been added");
});
const unsubscribe =  eventBus.subscribe("kitten added",(kittenName, age) =>{
    console.log(`kitten has been added. Second time.Its name is ${kittenName} and is ${age} years old`);
});
eventBus.subscribe("kitten removed",() =>{
    console.log("kitten has been removed");
});

eventBus.publish("kitten added","Puffy",8);
eventBus.publish("kitten removed");
unsubscribe();
console.log(`--------------------------`);
eventBus.publish("kitten added","Puffy",8);
eventBus.publish("kitten removed");

