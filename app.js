var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var port = process.env.PORT || 3000;
var usersRoute = require('./routes/users_router');
var db = require('./db');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.use('/api/users', usersRoute);








app.listen(port, function(){
  console.log('Listening on port ' + port);
});
