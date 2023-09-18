const eventBus = require('./event-bus');

eventBus.subscribe("kitten added",() =>{
    console.log("kitten has been added");
});
eventBus.subscribe("kitten added",(kittenName, age) =>{
    console.log(`kitten has been added. Second time.Its name is ${kittenName} and is ${age} years old`);
});
eventBus.subscribe("kitten remove",() =>{
    console.log("kitten has been added");
});

eventBus.publish("kitten added","Puffy",8)