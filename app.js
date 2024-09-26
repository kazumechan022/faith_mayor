const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const routes = require('./routes/router');

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use('/', routes);

app.listen(3000, () => {
    console.log('sucessfully running on http://localhost:3000')
});
