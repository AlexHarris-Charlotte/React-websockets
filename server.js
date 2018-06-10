const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 8080;

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });
  


app.listen(port, () => {
    console.log(`App Listening at Port ${port}`);
})