/*
DEFINITION:
https://sourcemaking.com/design_patterns/strategy
Define a family of algorithms, encapsulate each one, and make them interchangeable. Strategy lets the algorithm vary independently from the clients that use it.
Capture the abstraction in an interface, bury implementation details in derived classes.
*/

//PROCESS

// Client

// Interface
// - Implementation 1
// - Implementation 2

//Interface 

var Calculate = function() {

    return {
        setEquation : function(equation) {
            this.equation = equation;
        },
        setTaxEquation : function(taxEquation) {
            this.taxEquation = taxEquation;
        },
        //use apply to be more dynamic
        total : function(params) {
            return this.equation.total.apply(this, params);
        },
        tax : function(value) {
            return this.taxEquation.tax(value);
        }
    }
};

//Implementations

var Equation1 = (function() {
    
    return {
        total : function(list, field) {
            var total = 0;
            for (var i = 0, length = list.length; i < length; i++) {
                total += list[i][field];
            } 
            return total;
        }
    }
})();

var Equation2 = (function() {
return {
        total : function(list) {

        }
    }
})();

var TaxEquation1 = (function() {
return {
        tax : function(value) {
            return (value % 0.14).toFixed(2);
        }
    }
})();

var TaxEquation2 = (function() {
return {
        tax : function(value) {
            return value % 0.2
        }
    }
})();



//Client

function Cart() {

    var items = [
        {
            title: "Item 1",
            once_off: 2.23,
            monthly: 3.33
        },
        {
            title: "Item 2",
            once_off: 4.45,
            monthly: 0.33
        },
        {
            title: "Item 3",
            once_off: 1.53,
            monthly: 0
        }
    ];

    var items2 = [
        {
            title: "Item 1",
            prices : {
                once_off: 2.23,
                monthly: 3.33
            }
        },
        {
            title: "Item 1",
            prices : {
                once_off: 4.45,
                monthly: 0.33
            }
        },
        {
            title: "Item 1",
            prices : {
                once_off: 1.53,
                monthly: 0
            }
        }
    ];

    var Quote1 = new Calculate();
    Quote1.setEquation(Equation1);
    Quote1.setTaxEquation(TaxEquation1);

    var onceOffTotal = Quote1.total([
        items,
        'once_off'
    ]);

    var monthlyTotal = Quote1.total([
        items,
        'monthly'
    ]);

    var onceOffTax = Quote1.tax(onceOffTotal);
    var monthlyTax = Quote1.tax(monthlyTotal);

    Quote1.setTaxEquation(TaxEquation2);

    var onceOffTax = Quote1.tax(onceOffTotal);
    var monthlyTax = Quote1.tax(monthlyTotal);

}

Cart();

//Conclusions, makes functionalisty very loose coupled. Functionality easily interchangeable. 
//Testable code.