var express = require('express'); //express require
var app = express();
var bodyParser = require('body-parser'); //body parser require
var morgan = require('morgan');  //morgan
var port = process.env.PORT || 3000;
var usersRoute = require('./routes/users_router');
var db = require('./db');

app.set('view engine', 'ejs');
app.use(express.static(__dirname+ '/public'));




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));



app.use('/', usersRoute); //name spaceing








app.listen(port, function(){
  console.log('Listening on port ' + port);
});
