var product = {
        "directPrice" : 100,
        "syrexCost" : 200,
        "channelPrice" : 300,
        "name": "ADSL Speed",
        "label": "Select a speed",
        "description": "Select a speed",
        "type": "dropdown",
        "controlsetoptions": [{
            "option": {
                "name": "ADSL Up to 1Meg",
                "optionattributes": [{
                    "attribute": {"name": "directPrice", "title": "", "type": "Decimal"},
                    "value": "57.02"
                }, {
                    "attribute": {"name": "syrexCost", "title": "syrex-cost", "type": "Decimal"},
                    "value": "42.12"
                }, {
                    "attribute": {"name": "channelPrice", "title": "channel-price", "type": "Decimal"},
                    "value": "57.02"
                }]
            }, "sort": 1
        }]
};


// var Cart


var ConfigurationCalculator = function(options, key) {

    var price = 0;
//     _.each(configurations, function(config) {
//       price += config[key] ? config[key] : 0;
//     })();
    for (var i = 0; i < options.length; i++) {
      var config = options[i].option;
      for (var j = 0; j < config.optionattributes.length; j++) {
        var attributeObj = config.optionattributes[j];
        if (attributeObj.attribute.name == key) {
          price += attributeObj.value ? parseFloat(attributeObj.value) : 0;
        }
      }
    }
    return price;

};


//Colleague: configure product for a lineitem
var LineItem = function(product) {
    this.product = product;
    this.setupFeeTotal = this.calculateTotal(this.product.controlsetoptions, 'directPrice');
    this.monthlyTotal = this.calculateTotal(this.product.controlsetoptions, 'syrexCost');
    this.yearlyTotal = this.calculateTotal(this.product.controlsetoptions, 'channelPrice');
};

LineItem.prototype.calculateTotal = function(controlsetoptions, key) {
    var total = this.product[key] ? this.product[key] : 0;
    total += ConfigurationCalculator(controlsetoptions, key);
    return total;
};



//Mediator: only handles adding and removing of lineitems
var Cart = function() {

  var lineitems = [];

  return {
     add : function(lineitem) {
         lineitems.push(lineitem);
     },
     remove : function(lineitem) {
       var index = this.get().indexOf(lineitem);
       console.log(index);
       if (index >= 0) {
         lineitems.splice(index,1);
       }
     },
     get : function() {
      return lineitems;
     }
  };
};

// var Display =

var lineitem1 = new LineItem(product);
var lineitem2 = new LineItem(product);
var lineitem3 = new LineItem(product);

var proposal = new Cart();
proposal.add(lineitem1);
// proposal.add(lineitem2);
// proposal.add(lineitem3);

console.log(proposal.get());
// console.log(proposal.remove(lineitem1));
// console.log(proposal.get());
