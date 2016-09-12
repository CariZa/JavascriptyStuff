/*
The Command pattern encapsulates [actions] as objects. 
Command objects allow for loosely coupled systems by 
- separating the objects that issue a request [event]
- from the objects that actually process the request [event handlers]
These requests are called 
    - events 
and the code that processes the requests are called 
    - event handlers
*/

//actions
//These guys do the stuff
var sub = function(x, y) {
    return x - y;
}

var add = function(x, y) {
    return x + y;
};


//Command -> maintains information about the action
//This is like the template for commands
var Command = function(method, undoMethod, value) {
    return {
        'execute' : method,
        'undo' : undoMethod,
        'value' : value
    }
};


//This is the specific commands to trigger
var Add = function(value) {
    return new Command(add, sub, value);
};

var Sub = function(value) {
    return new Command(sub, add, value);
};


//Receiver -> 
    // handles the execute
    // keeps a history of executions
var Receiver = function() {

    var currentAmount = 0;
    var commands = [];

    return {
        'execute': function(obj) {
            currentAmount = obj.execute(currentAmount, obj.value);
            commands.push(obj);
        },
        'undo': function() {
            var command = commands.pop();
            var valueToUndo = command.value;
            currentAmount = command.undo(currentAmount, valueToUndo);
        }
    }

};

//Client -> trigger things
function client () {
    var receiver = new Receiver();
    receiver.execute(new Add(100));
    receiver.undo();
};

client();
