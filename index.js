var faker = require('faker');
const mysql = require('mysql');



//mysql Connection:
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123445',
    database: 'join_us',
    port: 3306
        //multipleStatements: true
});
//Enter the query: 
connection.connect();

//running Query:

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

var query = connection.query(
    'select email;',
    function(err, result, fields) {
        if (err) {
            return console.log(err);
        } else {
            console.log("result : ", result);
        }
    });


connection.end();