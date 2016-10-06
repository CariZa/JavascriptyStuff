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