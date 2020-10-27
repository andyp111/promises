/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
module.exports.pluckFirstLineFromFile = function(filePath, callback) {
  fs.readFile(filePath, 'utf8', (error, content) => {
    if (error) {
      console.log('Error getting first line');
      callback(error, null);
    } else {
      console.log('getting content');
      var lines = content.split(/\r?\n/);
      callback(null, lines[0]);
    }
  });

};

// This function should retrieve the status code of a GET request to `url`
module.exports.getStatusCode = function (url, callback) {
  request(url, (err, res, body) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
