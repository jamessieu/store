const express = require('express');
const app = express();
const path = require('path');
const db = require('./db/postgresql.js');
const eventController = require('./db/event-controller.js');
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

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
      console.log(data);
        io.emit('RECEIVE_MESSAGE', data);
    })
});