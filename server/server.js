const express = require('express');
const app = express();
const path = require('path');
var server = require('http').Server(app);
const io = module.exports.io  = require('socket.io')(server);

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../build')));


io.on('connection', function (socket) {
  socket.on('message', function () { });
  socket.on('disconnect', function () { });
});


app.listen(PORT, console.log(`Listening on port: ${PORT} ==> this is so tight`));
