const axios = require('axios');
var assert = require('assert');
var count = 0;
async function checkResponse() {

  return await axios({
    method: 'get',
    // url: 'http://localhost:3000'
    url: process.env.uri
  })
    .then(function (response) {
      console.log("Test is running.....");
      assert.equal(response.status, 200, "Error in Response! Couldnt find the page");
    }).catch(function (error) {
      count++;
      console.log("COUNT: ",count);
      checkResponse();
    })
}

checkResponse();