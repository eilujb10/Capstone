const uri = 'mongodb+srv://thefoxyninja:cocktailloungedb@mycluster-axnsd.mongodb.net/test?retryWrites=true&w=majority';
let api = require('../public/scripts/api.js');
// const MongoClient = require('mongodb').MongoClient;
// let collection;
// MongoClient.connect(uri, function(err, client) {
//   if(err) {
//     console.log("Error occured while connecting to MongoDB Atlas...\n", err);
//   }
//   console.log("CONNECTED...");
//   collection = client.db("CocktailLoungeDB").collection("Users");
  
//   //prints the results of the collection
//   collection.find().toArray(function(err, result) {
//     if (err) throw err;
//       console.log(result);
//   });

//   client.close();
// });


const mongoose = require('mongoose');
mongoose.connect(uri, function(err, res) {
  if(err) {
    console.log("THERE IS A PROBLEM WITH MONGODB ATLAS CONNECTION...");
    console.log(err);
  } else {
    console.log("CONNECTED...");
  }
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
});

let User = mongoose.model('Users', userSchema);




//Home Page
exports.index = function(req, res) {
  res.render('index');
};

// Login page
exports.login = function(req, res) {
  res.render('login');
};

// Creating a user account form
exports.createAccount = function(req, res) {
  res.render('create-account');
};

// Display drinks and search through them
exports.search = function(req, res) {
  res.render('search');
};

// Display details about specific drink
exports.drinkDetails = function(req, res) {
  res.render('drink-details');
};

// Add drink to database
exports.addDrink = function(req, res) {
  res.render('add-drink');
};

// View profile information
exports.profile = function(req, res) {
  res.render('profile');
};

// Review form for a drink
exports.review = function(req, res) {
  res.render('review');
};






// Testing Displaying Data from DB
exports.testDisplay = function(req, res) {
  console.log("This is user test display");

  User.find(function(err, users) {
    
    // if (err) return console.error(err);
    // res.render('test/test-display', {
    //   users: user
    // });
  });
};

// Testing Adding Data from DB
exports.testAdd = function(req, res) {
  res.render('test/test-add');
};

// Testing Adding Data from DB
exports.testAddUser = function(req, res) {
  let user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });
  res.send(`Username =${req.body.username} Password = ${req.body.password} Email = ${req.body.email}`);
};