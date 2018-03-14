/*

function myFunction() {
    var x = document.getElementById("r1").value;
    //document.getElementById("red").innerHTML = x;
    
    var y = document.getElementById("g1").value;
    //document.getElementById("green").innerHTML = y;
    
    var z = document.getElementById("b1").value;
    //document.getElementById("blue").innerHTML = z;
    
    document.getElementById("luminance").innerHTML = (x + 1) * 0.299 / 2.56 + (y + 1) * 0.587 / 2.56 + (z + 1) * 0.114 / 2.56;
}*/

/*var myApp = angular.module('myApp', []);

myApp.controller('CalcCtrl', function ($scope) {
    var num = 0.0;
    $scope.qty = new Quantity(12);
    $scope.num = num;
});*/

/*
function Quantity(numOfPcs, numOfcar, numOfBlue) {
    var qty = numOfPcs;
    var car = numOfcar;
    var blue = numOfBlue;
    var dozens = numOfPcs + numOfcar;

    this.__defineGetter__("qty", function () {
        return qty;
    });

    this.__defineSetter__("qty", function (val) {        
        val = parseInt(val);
        qty = val;
        dozens = val + car;
    });
    
     this.__defineGetter__("car", function () {
        return car;
    });

    this.__defineSetter__("car", function (val) {        
        val = parseInt(val);
        car = val;
        dozens = val + qty;
    });

    this.__defineGetter__("dozens", function () {
        return dozens;
    });

    this.__defineSetter__("dozens", function (val) {
        dozens = val;
        qty = val - car;
        car = val - qty;
    });
}
*/




/*

var myApp = angular.module('myApp', []);

myApp.controller('CalcCtrl', function ($scope) {
    var num = 0.0;
    $scope.qty = new Quantity(12);
    $scope.num = num;
});

function Quantity(numOfPcs, numOfcar, numOfRed) {
    var red = numOfRed;
    var qty = numOfPcs;
    var car = numOfcar;
    var dozens = numOfRed * 0.299 / 2.56 + numOfPcs * 0.587 / 2.56 + numOfcar * 0.114 / 2.56;
    
    this.__defineGetter__("red", function () {
        return red;
    });

    this.__defineSetter__("red", function (val) {        
        val = parseFloat(val);
        red = val;
        dozens = val * 0.299 / 2.56 + numOfPcs * 0.587 / 2.56 + numOfcar * 0.114 / 2.56;
    });

    this.__defineGetter__("qty", function () {
        return qty;
    });

    this.__defineSetter__("qty", function (val) {        
        val = parseFloat(val);
        qty = val;
        dozens = numOfRed * 0.299 / 2.56 + val * 0.587 / 2.56 + numOfcar * 0.114 / 2.56;
    });
    
     this.__defineGetter__("car", function () {
        return car;
    });

    this.__defineSetter__("car", function (val) {        
        val = parseFloat(val);
        car = val;
        dozens = numOfRed * 0.299 / 2.56 + numOfPcs * 0.587 / 2.56 + val * 0.114 / 2.56;
    });

    this.__defineGetter__("dozens", function () {
        return dozens;
    });

    this.__defineSetter__("dozens", function (val) {
        dozens = val;
        red = (val - numOfPcs * 0.587 / 2.56 + numOfcar * 0.114 / 2.56) * 2.56 / 0.299;
        qty = (val - numOfRed * 0.299 / 2.56 + numOfcar * 0.114 / 2.56) * 2.56 / 0.587;
        car = (val - numOfPcs * 0.587 / 2.56 + numOfRed * 0.299 / 2.56) * 2.56 / 0.114;
        
        
    });
}*/



function myFunction() {
    var x = document.getElementById("do").value;
    
    var y = document.getElementById("re").value;
   
    document.getElementById("mi").innerHTML = x + y;
    
}





