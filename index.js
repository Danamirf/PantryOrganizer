require('./config/config');

var express = require('express');
var bodyParser = require('body-parser');
const _ = require('lodash');
const {MongoClient, ObjectID} = require('mongodb');

//var DBConnection = require('./../playground/mongodb-connect');
var {mongoose} = require('./config/mongoose');
//var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {authenticate} = require('./middleware/authenticate');

const port = process.env.PORT;
var app = express();
//var db = DBConnection.connection();
var db;

//initialize mongodb connection once
MongoClient.connect('mongodb://localhost:27017/PantryOrganizer', (err, client) => {
    if (err)
    {
      return console.log('Unable to connect to MongoDB server');
    }
    db = client.db('PantryOrganizer');
    console.log('Connected to MongoDB server');
    
    app.listen(5000, () => {
    console.log(`Started on port 5000`);
    });
});

app.use(bodyParser.json()); //return func


// POST/users
app.post('/api/users', (req, res) => {
  // takes array of components we want to edit from modal.
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);

  user.save().then((user) => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((e) => {
    res.status(400).send(e);
  })
});

app.post('/api/users/login', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);

  User.findByCredentials(body.email, body.password).then((user) =>{
    //create new token 
    return user.generateAuthToken().then((token) => {
      res.setHeader('Access-Control-Allow-Headers', 'x-auth, content-type');
      res.header('x-auth', token).send(user);
      console.log(token);
    });
  }).catch((e) => {
    res.status(400).send();
  });
});

app.delete('/api/users/me/token', authenticate, (req, res) => {
  req.user.removeToken(req.token).then(() => {
    res.status(200).send();
  }, () => {
    res.status(400).send();
  });
});

app.get('/api/users/me', authenticate, (req, res) => {
  res.send(req.user);
});

module.exports = {app};