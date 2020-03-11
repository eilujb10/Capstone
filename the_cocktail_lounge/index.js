let express = require('express'),
  //pug = require('pug'),
  path = require('path'),
  route = require('./routes/routes.js'),
  bodyParser = require('body-parser');

let app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({extended:true}));
// let urlencodedParser = bodyParser.urlencoded({
//   extended: true
// })


app.get('/', route.index);
app.get('/login', route.login);
app.get('/create-account', route.createAccount);
app.get('/profile', route.profile);
app.get('/search', route.search);
app.get('/drink-details/:id', route.drinkDetails);
app.get('/add-drink', route.addDrink);
app.get('/review', route.review);


//test routes
app.get('/test-display', route.testDisplay);
app.get('/test-add', route.testAdd);
app.post('/test-add', route.testAddUser);
//app.post('/test-add', urlencodedParser, route.testAddUser);

app.listen(3000);