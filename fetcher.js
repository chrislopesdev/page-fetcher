const request = require('request');
const fs = require('fs');

// create variables based on inputs
const url = process.argv[2];
const localFilePath = process.argv[3];

request(url, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  
  // write page body to local file
  fs.writeFile(localFilePath, body, err => {
    if (err) {
      console.error(err)
      return
    }
    // approximate file size based on character length
    const fileSize = body.length;
    // log out success message
    console.log(`Downloaded and saved ${fileSize} bytes to ${localFilePath}`)
  })
  
});





