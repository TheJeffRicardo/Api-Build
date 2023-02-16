const mysql = require("mysql");
require("dotenv").config()

const connection = mysql.createConnection({
  HOST: process.env.HOST,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DATABASE: process.env.DB,
  multipleStatements: true
});

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;