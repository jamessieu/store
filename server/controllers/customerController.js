const db = require("../postgresql.js");


///LEGACY CODE

function getCustomer (req, res, next) {
    db.query('INSERT * FROM "Customer" ')
    .then(cusomerData => {
    res.send(customerData);
})
};

/////LEGACY CODE


module.exports = {
  createUser: (req, res, next) => {
    const username = req.body.username;
    let userId;
    
    db.one(`INSERT INTO "User"("username") VALUES($1) RETURNING "id"`, [username])
        .then(data => {
            //console.log("DATA ID", data.id);
            userId = data.id
            //res.json(data);

            db.one(`INSERT INTO "Cart"("userId") VALUES($1) RETURNING "id"`, [userId])
                .then(data => {
                    console.log("DATA ID", data); // print new user id;
                    res.json(data);
                })
                .catch(error => {
                    console.log('ERROR:', error); // print error;
                });



        })
        .catch(error => {
            console.log('ERROR:', error); // print error;
        });

    // db.one(`INSERT INTO "Cart"() VALUES() RETURNING "id"`, [])
    //     .then(data => {
    //         console.log("DATA ID", data); // print new user id;
    //         res.json(data);
    //     })
    //     .catch(error => {
    //         console.log('ERROR:', error); // print error;
    //     });



    // db.any(`SELECT * FROM "Customer" WHERE "Email" = $1`, ["bob@gmail.com"])
    // .then(function(data) {
    //     console.log(data);
    //     // success;
    // })
    // .catch(function(error) {
    //     console.log('Error:', error);
    // });
  }
}