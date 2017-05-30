// Try using the decorator pattern for a car
// Structural pattern

// Notes:
// The decorator and the decorations must all have the same interface.
// The object being decorates must also have the same interface.
// The object that is being decorated must passed in and modified
// The same object must always be returned

var carInterface = function () {
    function updateTotal() {};
    function updateType() {};
    function updateColor() {};
};

var car = function() {
    this.owner = "Owner";
    this.total = 0;
    this.type = "";
    this.color = "";
};

var carDecorator = function(car) {

    this.updateTotal = function () {
    }
    
    this.updateType = function () {
        var update = new makeTypeMazda(car);
        update.updateType();
        update.updateTotal();
        update.updateColor();
    }
    this.updateColor = function () {
        var update = new makeCarRed(car);
        update.updateType();
        update.updateTotal();
        update.updateColor();
    }
};

var makeCarRed = function(car) {
    this.updateTotal = function () {
        car.total += 5000;
    }
    this.updateType = function () {}
    this.updateColor = function () {
        car.color = "Red";
    }
};

var makeCarBlue = function(car) {
    this.updateTotal = function () {}
    this.updateType = function () {}
    this.updateColor = function () {
        car.color = "Blue";
    }
};

var makeTypeMazda = function(car) {
    this.updateTotal = function () {
        car.total += 100000;
    }
    this.updateType = function () {
        car.type = "Mazda";
    }
    this.updateColor = function () {}
};

var makeCarGreen = function(car) {
    this.updateTotal = function () {}
    this.updateType = function () {}
    this.updateColor = function () {
        car.color = "Green";
    }
};

var testCar = new car();

var decorator = new carDecorator(testCar);
console.log(testCar);
decorator.updateColor();
decorator.updateType();
console.log(testCar);