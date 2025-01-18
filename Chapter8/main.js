//Functions

var sayHelloTo = function (name) {
  console.log("Hello " + name + "!");
};

var drawCats = function (howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
      console.log(i + " =^.^=");
    }
  };

  var printMultipleTimes = function (Printthis, ThisManyTimes) {
    for (var i = 0; i < ThisManyTimes; i++) {
      console.log(i + " " + Printthis);
    }
  };  
printMultipleTimes("Ulrich",2)



var fifthletter = function (name) {
  if (name.length < 5) {
    return;
  }
  return name[4];
}
console.log(fifthletter("Ulrich"));

var double = function (number) {
  return number * 2;
  };
  double(double(3));

