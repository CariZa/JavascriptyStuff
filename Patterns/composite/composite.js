// Composite pattenr concept

// Client
// Tree
// Leaves

// Just trying this idea but might be the wrong concept still

var num = 0;

var calc = function(num) {
    this.num = num;
};

calc.prototype = {
    add : function(addNum) {
        console.log("Add: "+addNum+" to "+this.num);
        this.num += addNum;
    },
    get: function() {
        return this.num;
    }
};


var calculate1 = new calc(num);

calculate1.add(5);
console.log(calculate1.get());

var calculat2 = new calc(1);
calculat2.add(3);
console.log(calculat2.get());


calculate1.add(3);
console.log(calculate1.get());

console.log(calculat2.get());

