const request = require('request');
const fs = require('fs');
//3rd command line item passed to script
const url = process.argv[2];
//4th command line item passed to script
const localPath = process.argv[3];
const fetch = function(url, localPath) {
  request(url, (error, response, body) => {
    if (error) {
      console.log('Download fail ', error);
      return;
    }

    fs.writeFile(localPath, body, (error) => {
      if (error) {
        console.log('Write failure to localPath: ', localPath);
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
      }
    });
  });
};
if (!url || !localPath) {
  console.log('Need 2 parameters');
  console.log('Usage: node fetcher.js <url> <local-path>');
} else {
  fetch(url, localPath);
}