const db = require("../postgresql.js");

function getAllItems (req, res, next) {
    db.query('SELECT * FROM "Product" ')
    .then(productData => {
    res.send(productData);
})
};

function filterByMen(req, res, next) {
    db.query(`SELECT * FROM "Product" WHERE "genre" = 'men' `)
    .then(productDataMen => {
        res.send(productDataMen);
    })
};

function filterByWomen(req, res, next) {
    db.query(`SELECT * FROM "Product" WHERE "genre" = 'women' `)
    .then(productDataWomen => {
        res.send(productDataWomen);
    })
};

function addItemToCart(req, res, next) {
    const username = req.body.username;
}


module.exports = {
    getAllItems,
    filterByMen,
    filterByWomen
};