const express = require('express');
const app = express();
const path = require('path');
const eventController = require('./db/eventControllers/productEventController.js');
var server = require('http').Server(app);
const io = module.exports.io  = require('socket.io')(server);
const db = require('./db/postgresql.js');
const http = require('http');
const socket = require('socket.io');


const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../build')));

app.get('/main',
    eventController.getAllProducts,
)

app.get('/mens',
    eventController.filterByMen,
)

app.get('/womens',
    eventController.filterByWomen,
)


server = app.listen(PORT, console.log(`Listening on port: ${PORT} ==> this is so tight`));

const io = socket(server);

app.get('/cart',
    eventController.getCart,
)




//==================> SOCKETS <=====================\\

io.on('connection', function (socket) {
  socket.on('message', function () { });
  socket.on('disconnect', function () { });
});


app.listen(PORT, console.log(`Listening on port: ${PORT} ==> this is so tight`));
io.on('connection', (socket) => {
    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});
