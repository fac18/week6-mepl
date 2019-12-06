// get-data.js

const databaseConnection = require("../database/db_connection");

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
  getStockData
};
