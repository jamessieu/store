const express = require('express');
const app = express();
const path = require('path');
const eventController = require('./db/eventControllers/productEventController.js');
// var server = require('http').Server(app);
const db = require('./db/postgresql.js');
const http = require('http');
const socket = require('socket.io');


const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../build')));


//============> PRODUCT ROUTES <===============\\

app.get('/main',
    eventController.getAllProducts,
)

// app.get('/mens',
//     eventController.filterByMen,
// )

// app.get('/womens',
//     eventController.filterByWomen,
// )

// app.get('/cart',
//     eventController.getCart,
// )

//==================> SOCKETS <=====================\\

const server = app.listen(PORT, console.log(`Listening on port: ${PORT} ==> this is so tight`));

// socket setup 
const io = socket(server);

// listen for when the client connects to the server
io.on('connection', (socket) => { // each client will have their own socket b/w client and server
  // now the socket must be connected on the front end to see the below message
  console.log('Connected to socket: ', socket.id);  // id will be different for every computer or refresh

    // listening for the emmited event from the client side called "SEND_MESSAGE"
    socket.on('SEND_MESSAGE', data => { // we are receiving the data the client sent
      // we want to now send the message out to all other members of the chat
      io.sockets.emit('RECEIVE_MESSAGE', data); // io.sockets represents all other connected sockets
      // io.emit('RECEIVE_MESSAGE', data);
    })
});