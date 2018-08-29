const express = require('express');
const app = express();
const path = require('path');
const itemController = require('./controllers/itemController.js');
const customerController = require('./controllers/customerController.js');
const db = require('./postgresql.js');
const http = require('http');
const socket = require('socket.io');
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config()
const session = require('express-session')

const PORT = process.env.PORT || 3000;

let sessions = {secret: 'TESTING', name: 'login', proxy: true, resave: true, saveUninitialized: false};

app.use(session(sessions));
app.use(bodyParser.json(), passport.initialize());
app.use(passport.session());


//This is ugly, I know.
function createUserAndCart(username, user, done) {
    db.one(`INSERT INTO "customer"("username") VALUES($1) RETURNING "id"`, [username])
        .then(data => {
            let customerId = data.id;
            db.one(`INSERT INTO "cart"("customerid") VALUES($1) RETURNING "id"`, [customerId])
                .then(data => {
                  user.id = customerId;
                  done(null, user);
                })
                .catch(error => {
                    console.log('ERROR AT CART CREATION:', error);
                });
        }).catch(error => {
            console.log('ERROR AT CUSTOMER CREATION:', error);
        });
}

function checkIfUserExists(username, user, done) {
  db.one('SELECT * FROM customer WHERE username = $1', username)
      .then(customer => {
          user.id = customer.id;
          done(null, user);
      })
      .catch( () => {
        return createUserAndCart(username, user, done);    
      });
}

function loggedIn(req, res, next) {
  if(req.user && sessions[req.user.displayName]) {
    res.locals = req.user.profile.name.givenName;
    next();
  } else {
    res.redirect('/login');
  }
}

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/googleOAuth'
}, function(accessToken, refreshToken, profile, cb) {
    sessions[profile.displayName] = profile;
    return cb(null, {displayName: profile.displayName, profile: profile});
}));

passport.serializeUser(function(user, done) {

    checkIfUserExists(user.displayName, user, done);

    //console.log(user)

    //done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
})

//============> PRODUCT ROUTES <===============\\

app.get('/', loggedIn, (req, res) => {
  console.log(req.user);
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
})

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
})

app.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/login');
})

app.get('/cart', loggedIn, (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
})

app.get('/getname', loggedIn, (req, res) => {
  res.send(res.locals);
})

app.get('/main', loggedIn,
  itemController.getAllItems
)

app.post('/api/users', customerController.createUser)
app.get('/googleLogin', passport.authenticate('google', {scope: ['profile']}));
app.get('/googleOAuth', passport.authenticate('google', {failureRedirect: '/login'}), function(req, res) {
    res.redirect('/');
})

app.use(express.static(path.join(__dirname, '../build')));




//==================> SOCKETS <=====================\\

const server = app.listen(PORT, console.log(`Listening on port: ${PORT} ==> this is so toight`));

const io = socket(server);

io.on('connection', (socket) => {
  console.log("socket: ", socket.id);
  socket.on('SEND_MESSAGE', function(data){
    io.sockets.emit('RECEIVE_MESSAGE', data);
  })
});