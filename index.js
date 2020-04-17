var faker = require('faker');
var mysql = require('mysql');



//mysql Connection:
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123445',
    database: 'join_us'
});

//Enter the query: 



//running Query:
connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

connection.end();

//creating fake information:
function getdata() {
    faker.internet.email();
    faker.date.past();
}