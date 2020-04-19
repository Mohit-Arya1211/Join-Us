var faker = require('faker');
const mysql = require('mysql');
var express = require('express');



//mysql Connection:
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123445',
    database: 'join_us',
    port: 3306
});

//Enter the query: 

//##########################################################################################
//For entering the 500 dummy Users Loop:

// for (var i = 0; i < 500; i++) {
//     getdata = {
//         email: faker.internet.email(),
//         created_at: faker.date.past()
//     };
//     var data = connection.query('insert into users set ?', getdata, function(err, result) {
//         if (err) throw err;
//         console.log(result);
//     })
// }
//############################################################################################
//Query for running any operaion:
// var query = connection.query(
//     'select email from users;',
//     function(err, result, fields) {
//         if (err) {
//             return console.log(err);
//         } else {
//             console.log("result : ", result);
//         }
//     });


//running Query:

// Query to get the count :
//Routes for App by Express.Js

var app = express();
app.get("/", function(req, res) {

    var q2 = "select count(*) as count from users";
    connection.query(q2, function(err, result) {
        if (err) {
            return console.log(err);
        }
        var count = result[0].count;
        res.send("We have " + count + " users in our database.");
    });

});



// Server Added :
app.listen(1211, function() {
    console.log("App running on port : 1211");
});