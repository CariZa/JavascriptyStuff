//strategy pattern
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
    };

};