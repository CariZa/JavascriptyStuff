//Implementations

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