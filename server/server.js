const express = require('express');
const app = express();
const path = require('path');
var server = require('http').Server(app);
const io = module.exports.io  = require('socket.io')(server);
const db = require('./db/postgresql.js');
const eventController = require('./db/event-controller.js');


const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../build')));

app.get('/main',
    eventController.getAllProducts,
)

// app.get('/mens',
//     eventController.getMens,
// )

// app.get('/womens',
//     eventController.getWomens,
// )

io.on('connection', function (socket) {
  socket.on('message', function () { });
  socket.on('disconnect', function () { });
});


app.listen(PORT, console.log(`Listening on port: ${PORT} ==> this is so tight`));
