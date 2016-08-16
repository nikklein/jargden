var assert = require("./assert");
var circle = require('../modules/circle')

function testCircleRadiusDefaultsTo10() {
  var circle = new Circle();

  if (circle.radius() !== 10) {
    throw new Error("Circle size is not 10");
  }
};

testCircleRadiusDefaultsTo10();
