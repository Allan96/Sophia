const express = require('express');
const app = express();
const routes = require('./routes');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);


var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Umbler listening on port %s', port);
});