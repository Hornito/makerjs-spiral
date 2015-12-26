var makerjs = require('makerjs');
var Spiral = require('./index.js');
console.log(makerjs.exporter.toSVG(new Spiral(2, 0, 1)));
