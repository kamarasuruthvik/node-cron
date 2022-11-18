var axios = require('axios');

async function getCanonicals() {
  var config = {
    method: 'get',
    url: 'https://bigfoot-strapi.smsgupshup.dev/api/pages?fields[0]=canonical&locale=all',
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY4NTA4OTcxLCJleHAiOjE2NzExMDA5NzF9.1cjYgq8F7rw7zbuah1gZmPPI0hUwDyk0mnElv1gOZDU',
    },
  };
  try {
    let { data } = await axios(config);
    return data;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { getCanonicals };
