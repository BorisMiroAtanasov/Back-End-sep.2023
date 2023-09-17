const eventBus = require('./event-bus');

eventBus.subscribe("kitten added",() =>{
    console.log("kitten has been added");
});
eventBus.subscribe("kitten added",() =>{
    console.log("kitten has been added. Second time");
});
eventBus.subscribe("kitten remove",() =>{
    console.log("kitten has been added");
});

eventBus.publish("kitten added")