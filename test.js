var cookie = require('./index.js');
exports.test = function(test){
  test.notEqual(cookie, '');
  test.done();
};