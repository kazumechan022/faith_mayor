const express = require('express');
const faithjs = require('../controller/Controller')
const routes = express.Router();

routes.get('/', faithjs.index);
routes.post('/save', faithjs.save);
routes.get('/display', faithjs.display);

module.exports = routes;


