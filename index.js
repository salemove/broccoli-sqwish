'use strict'

var Filter = require('broccoli-filter'),
    sqwish = require('sqwish');

function SqwishFilter(inputTree) {
  if (!(this instanceof SqwishFilter)) {
    return new SqwishFilter(inputTree);
  }

  this.inputTree = inputTree;
}

SqwishFilter.prototype = Object.create(Filter.prototype);
SqwishFilter.prototype.constructor = SqwishFilter;

SqwishFilter.prototype.extensions = ['css'];
SqwishFilter.prototype.targetExtension = 'css';

SqwishFilter.prototype.processString = function(str) {
  return sqwish.minify(str)
}

module.exports = SqwishFilter
