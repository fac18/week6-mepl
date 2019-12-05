// get-data.js

const databaseConnection = require("../database/db_connection");

const createUser = (username, cb) => {
  databaseConnection.query(
    `INSERT INTO users (name) VALUES ('${username}')`,
    (err, res) => {
      if (err) {
        throw new Error("Enter your name");
      }
    }
  );
};

const getStockData = cb => {
  console.log("1. I'm in getStockData!");
  databaseConnection.query(
    "SELECT fruit, stock, price FROM shop ORDER BY id",
    (err, res) => {
      console.log("2. where are we?");
      if (err) console.log("3. can we see getStockData?");
      cb(null, res.rows);
    }
  );
};

module.exports = {
  createUser,
  getStockData
};
