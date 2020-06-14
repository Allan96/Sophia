const express = require('express');
const routes = express.Router();
const SendMessageController = require('./controllers/SendMessageController');
const APIController = require('./controllers/APIController');


routes.post('/post', SendMessageController.index);
routes.get('/api', APIController.index);




module.exports = routes;