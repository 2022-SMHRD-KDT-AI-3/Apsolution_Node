const { request } = require("express");  
const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const conn = require("../config/DB.js");


router.get("/", function (request, response) {
    let sql = "SELECT * FROM applecareplus.user_info";

    conn.query(sql,function(err,rows){
      
      data=rows;
      console.log(rows)
      response.render("main",{
        data : data
  
      })
      
    })
    
  })

module.exports = router;