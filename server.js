const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(express.static('./app/public'));

require('./app/routing/htmlRoutes')(app)
// require('./app/routing/apiRouting')(app)

app.listen(port, function () {
    `listening on ${port}, have fun!`
})