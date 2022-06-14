const express = require("express");
const app = express();
const router = require("./routes/start.js");
const bodyparser = require("body-parser");
const ejs = require("ejs");

const session = require("express-session"); 
const session_mysql_save = require("express-mysql-session");

const path = require('path');

let startRouter = require('./routes/start');

let db_Apple = {
    host : 'project-db-stu.ddns.net', 
    user : 'applecareplus',
    password : '1234',
    port : '3307',
    database : 'applecareplus'
}


let s_m_s = new session_mysql_save(db_Apple);

// app.use(express.static("./public"));
// app.use(express.static("./uploads"));

app.set("view engine","ejs")
app.use(session({
    secret : "smart",
    resave : false,
    saveUninitialized : true,
    store : s_m_s
}))



app.use(bodyparser.urlencoded({extended:false}));
app.use('/home', startRouter);
app.listen(8080, function(){
    console.log('start! server!');
});
