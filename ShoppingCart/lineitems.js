//Mediator pattern

var LineItems = function() {

    //make global to class
    var lineitems = [];

    return {
        lineitems : [],
        add : function(lineitem) {
            lineitems.push(lineitem);
        },
        remove : function(refThis, lineitem) {
            var index = lineitems.indexOf(lineitem);
            lineitems.splice(index, 1);
        },
        get : function() {
            return lineitems;
        }
    }

};