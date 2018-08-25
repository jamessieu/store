const db = require("./postgresql.js");

function getAllProducts (req, res, next) {
db.query('SELECT * FROM "Product" ')
  .then(productData => {
    return productData;
  })
};


module.exports = {
    getAllProducts
};