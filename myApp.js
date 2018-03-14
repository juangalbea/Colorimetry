angular.module('rangeExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.value = 75;
      $scope.min = 10;
      $scope.max = 90;
    }]);

var myBar = document.getElementsByName("value").value;
console.log(myBar);
myBar.addEventListener("change", myFunction, false);
                       

function myFunction() {
    var x = document.getElementsByClassName("ng-binding").innerHTML;
    
    alert("Hello!");
    console.log(x);
    }

function myFunction() {
    var x = document.getElementById("r1").value;
    
    
    var y = document.getElementById("g1").value;
   
    
    var z = document.getElementById("b1").value;
  
    
    var lum = x * 0.299 / 2.55 + y * 0.587 / 2.55 + z * 0.114 / 2.55;
    document.getElementById("luminance").innerHTML = parseInt(lum);
    
    var lumi = parseInt(lum * 2.55);

    
    document.getElementById('changeBox').style.backgroundColor = "rgb(" + lumi + ", " + lumi + ", " + lumi + ")";
    
    console.log(x);
    console.log(y);
    console.log(z);
    var u = parseInt(x);
    var v = parseInt(y);
    var w = parseInt(z);
    var k;
   if(u >= v && u >= w) {
       k = u;
            if(v >= w) {
                sat = u - w;
                console.log("1." + sat);
            } else {
                sat = u - v;
                console.log("2." + sat);
        }
    } else if(v >= w) {
        k = v;
        if(w >= u) {
            sat = v - u;
            console.log("3." + sat);
        } else {
            sat = v - w;
            console.log("4." + sat);
        }
    } else {
        k = w;
        if (v >= u) {
            sat = w - u;
            console.log("5." + sat);
        } else {
            sat = w - v;
            console.log("6." + sat);
        }
    }
    var perc = sat / 2.55;
    document.getElementById("saturation").innerHTML = parseInt(perc);
    
    
    k = 255 - k;
    var c = (255 - u - k)/(1 - k/255);
    var m = (255 - v - k)/(1 - k/255);
    var y = (255 - w - k)/(1 - k/255);
    console.log(k);
    console.log("c" + c);
    console.log("m" + m);
    console.log("y" + y);
    var cc = parseInt(255 - c);
    var mm = parseInt(255 - m);
    var yy = parseInt(255 - y);
    
    console.log("cc" + cc);
    console.log("mm" + mm);
    console.log("yy" + y);
    
    var ccx = c/2.55;
    var mmx = m/2.55;
    var yyx = y/2.55;
    
    document.getElementById("cyan").innerHTML = parseInt(ccx);
    document.getElementById('cy').style.backgroundColor = "rgb(" + cc + ", 255, 255)";
    
    document.getElementById("magenta").innerHTML = parseInt(mmx);
    document.getElementById('ma').style.backgroundColor = "rgb(255, " + mm + ", 255)";
    
    document.getElementById("yellow").innerHTML = parseInt(yyx);
    document.getElementById('ye').style.backgroundColor = "rgb(255, 255," + yy + ")";
    

    document.getElementById('final').style.backgroundColor = "rgb(" + u + ", " + v + ", " + w + ")";
    
    
    
}





