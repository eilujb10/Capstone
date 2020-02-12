let express = require('express'),
  path = require('path'),
  route = require('./routes/routes.js'),
  bodyParser = require('body-parser');

let app = express();

app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname + '/public')));

let urlencodedParser = bodyParser.urlencoded({
  extended: true
})

app.get('/', route.index);
app.get('/login', route.login);
app.get('/create-account', route.createAccount);
app.get('/profile', route.profile);
app.get('/drink-details', route.drinkDetails);
// app.get('/profile/:id', route.profile);
// app.get('/drink-details/:id', route.drinkDetails);

app.listen(3000);