//Lets try create a cart again
//Overkill solution for a cart totalling system, but winging it
//This pattern seems to work well for tracking the manipulation of a piece of data
//through the use of the actions taken on that data. Not so much for a collection of data

//Responsibilities

//Cart will add a product, and this will be added to a total

//actions
function add(productCost, total) {
    return productCost + total;
}

function promotion(productCost, total, promotionPercentage) {
    return total + (productCost - (productCost * (promotionPercentage/100)));
}

function remove(productCost, total) {
    return total - productCost;
}

function removePromotion(productCost, total, promotionPercentage) {
    return total - (productCost - (productCost * (promotionPercentage/100)));
}


//Command

var Command = function(method, undoMethod, cost, promotionPercentage) {
    return {
        execute: method,
        undo: undoMethod,
        cost: cost,
        promotion: promotionPercentage || 0
    }
};

//Actions that template into Commands - flavors (making this up to remember the steps, so don't quite this word usage)
//This helps automate these actions, makes the interface of Add() easier

var Add = function(cost) {
    return new Command(add, remove, cost);
}

var Remove = function(cost) {
    return new Command(remove, add, cost);
}

//Promotion is like a flavor of "Add" this is keeping the functionality loose
var Promotion = function(cost, promo) {
    return new Command(promotion, removePromotion, cost, promo);
}

var RemovePromotion = function(product, promo) {
    return new Command(removePromotion, promotion, product, promo);
}

//Receiver "Cart"

var CalculateTotal = function() {

    var total = 0;
    var items = [];

    return {
        'execute': function(action) {
            var value = action.cost;
            var promo = action.promotion;
            total = action.execute(value, total, promo);
            items.push(action);
        },
        'undo': function() {
            var action = items.pop();
            var value = action.cost;
            var promo = action.promotion;
            total = action.undo(value, total, promo);
        },
        'getTotal': function() {
            return total;
        }
    }

}



//trigger

function trigger() {

    var calculate = new CalculateTotal();
    var product = {
        id: 1,
        cost: 50
    };
    var promoProduct = {
        id: 1,
        cost: 50,
        promotion: 25
    };
    var promoProduct2 = {
        id: 1,
        cost: 50,
        promotion: 10
    };

    var items = [
        product,
        promoProduct,
        promoProduct2,
        promoProduct2
    ];

    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (item.promotion) {
            calculate.execute(new Promotion(item.cost, item.promotion));
        } else {
            calculate.execute(new Add(item.cost));
        }
        console.log(calculate.getTotal());
    }
}

trigger();

//Conclusion, this doesn't seem like a good real world solution for a carting system, 
// maybe a cart calculation system rather