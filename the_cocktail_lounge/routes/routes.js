let mongourl = 'mongodb+srv://thefoxyninja:P@ssw0rd@mycluster-axnsd.mongodb.net/test';
let mongoose = require('mongoose');
let path = require('path');
mongoose.Promise = global.Promise;
mongoose.connect(mongourl, {useMongoClient: true});

//db connection string = mongodb+srv://thefoxyninja:P@ssw0rd@mycluster-axnsd.mongodb.net/test

let mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', function(callback) {

});

let userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  likedDrinks: Array,
  addedDrinks: Array
});

// let drinkSchema = mongoose.Schema({
//   name: String,
//   url: String,
//   ingredients: Array,
//   measurements: Array,
//   tags: Array
// });

// let ingredientSchema = mongoose.Schema({
//   name: String,
//   desc: String
// });

let User = mongoose.model('Users', userSchema);
// let Drink = mongoose.model('test2', drinkSchema);
// let Ingredient = mongoose.model('test3', ingredientSchema);

exports.index = function(req, res) {
  res.sendFile(path.join(__dirname + '/../views/index.html'));
  //res.send("This is the index page");
  // User.find(function(err, user) {
  //   if(err) return console.log(err);
  //   res.render('index', {
  //     title: "Users List",
  //     people: users
  //   });
  // });
};

exports.login = function(req, res) {
  res.sendFile(path.join(__dirname + '/../views/login.html'));
};

exports.createAccount = function(req, res) {
  res.sendFile(path.join(__dirname + '/../views/create-account.html'));
};

exports.profile = function(req, res) {
  res.sendFile(path.join(__dirname + '/../views/profile.html'));
};

exports.drinkDetails = function(req, res) {
  res.sendFile(path.join(__dirname + '/../views/drink-details.html'));
};