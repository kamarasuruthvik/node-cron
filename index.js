const express = require('express');
const fs = require('fs');
const { makeXML } = require('./controllers/makeXML');
const app = express();
const port = 3000;

app.get('/xml', async (req, res) => {
  const canonicalsXML = await makeXML();
  fs.writeFileSync('./public/sitemap.xml', canonicalsXML);
  res.send(canonicalsXML);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
