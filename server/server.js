const express = require('express');
const app = express();
const path = require('path');
const db = require('./db/postgresql.js');
const eventController = require('./db/event-controller.js');


const PORT = 3000;

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

app.listen(PORT, console.log(`Listening on port: ${PORT} ==> this is so tight`));