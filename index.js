require('babel-core/register');
require('babel-polyfill');
var stdrepl = require('stdrepl');
var emuto = require('emuto/lib/index.js');
var stringify = require('json-stringify-pretty-compact');

stdrepl.eval = function(input) {
  try {
    var output = emuto.default(input)();
    var formatted_output;
    try {
      formatted_output = stringify(output);
    } catch (e) {
      formatted_output = output;
    }
    stdrepl.print(formatted_output);
  } catch (e) {
    stdrepl.print(e);
  }
  stdrepl.print('');
};
