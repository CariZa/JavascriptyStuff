//This will keep track of line items and return values

//Creating a very loosely coupled cart object

//Strategy pattern 
// Interface

var Cart = function() {

    return {
        setAction : function(action, fn) {
            this[action] = fn;
        },
        //Setup
        setAddAction : function(fn) {
            this.setAction('addAction', fn);
        },
        setRemoveAction : function(fn) {
            this.setAction('removeAction', fn);
        },
        setGetAction : function(fn) {
            this.setAction('getAction', fn);
        },
        //Interface
        add : function(item) {
            this.addAction(item);
        },
        remove : function(item) {
            this.removeAction(item);
        },
        get : function() {
            this.getAction();
        }
    };

};