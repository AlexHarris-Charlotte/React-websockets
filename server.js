const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 8080;
const routes = require('./Routes/demo');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(routes.app);



app.listen(port, () => {
    console.log(`App Listening at Port ${port}`);
})