const listeners = {}

const publish = (eventName,...eventArtgs) => {
    if(!listeners[eventName]){
        return;
    }
    listeners[eventName].forEach((listener) => listener(...eventArtgs));
};

const subscribe = (eventName, eventListener) => {
    if(!listeners[eventName]){
        listeners[eventName] = []
    
    }
    listeners[eventName].push(eventListener);

    return ()=> {
        console.log(`You have been unsubscribed from ${eventName}`);
        console.log(`Befor unsubscribe`, listeners);
        listeners[eventName]= listeners[eventName].filter(
            (listeners) =>listeners !== eventListener
        );
        console.log(`after unsubscribe`, listeners);
    }


};




const eventBus = {
    publish,
    subscribe,
}

module.exports = eventBus;