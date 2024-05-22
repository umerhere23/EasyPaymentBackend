const express = require("express");
const mysql= require('mysql2');
const util= require('util');
const { pool } = require("./db");


exports.getDBcredentials =async function (host,user,password,database) {

  try{
        const pool= mysql.createPool({
        host: host,
        user:user,
        password:password,
        database:database
        });
 
        pool.query = util.promisify(pool.query)
        return pool;
    }
    catch(e)
    {
        return e;
    }
}
