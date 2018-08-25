const express = require('express');
const app = express();
const path = require('path');
//const db = require('./db/postgresql.js');
const eventController = require('./db/eventControllers/productEventController.js');



const PORT = 3000;

app.use(express.static(path.join(__dirname, '../build')));


//============> PRODUCT ROUTES <===============\\

app.get('/main',
    eventController.getAllProducts,
)

app.get('/mens',
    eventController.filterByMen,
)

app.get('/womens',
    eventController.filterByWomen,
)

//============> TRANSACTION ROUTES <===============\\





app.listen(PORT, console.log(`Listening on port: ${PORT} ==> this is so tight`));