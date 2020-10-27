/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var async = require('./promisification.js');
var asyncNode = require('./promiseConstructor.js');



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // return new Promise((resolve, reject) => {
  //   if (error) {
  //     reject(error);
  //   } else {
  return asyncNode.pluckFirstLineFromFileAsync(readFilePath)
    .then((userName) => { return async.getGitHubProfileAsync(userName); })
    .then((response) => {
      fs.writeFile(writeFilePath, response, (error) => {
        if (error) {
          console.log('error');
          return;
        } else {
          // callback(null);
          console.log('file written successfully');
          // return writeFilePath.concat(response);
        }
      });
    })
    .catch(console.log('got an error'));

  // return promise;

};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
