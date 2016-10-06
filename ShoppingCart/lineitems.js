//Mediator pattern

var LineItems = function() {

    return {
        lineitems : [],
        add : function(lineitem) {
            this.lineitems.push(lineitem);
        },
        remove : function(lineitem) {
            var index = this.lineitems.indexOf(lineitem);
            this.lineitems.splice(index, 1);
        },
        get : function() {
            return this.lineitems;
        }
    }

};