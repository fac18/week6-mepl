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
  databaseConnection.query(
    "SELECT fruit, stock, price FROM shop ORDER BY id",
    (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
      cb(null, res.rows);
    }
  );
};

module.exports = {
  createUser,
  getStockData
};
