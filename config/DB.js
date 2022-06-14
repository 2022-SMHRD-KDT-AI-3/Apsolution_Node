const mysql = require("mysql");

let conn = mysql.createConnection({
    host : 'project-db-stu.ddns.net', 
    user : 'applecareplus',
    password : '1234',
    port : '3307',
    database : 'applecareplus'
});

conn.connect();

module.exports = conn;