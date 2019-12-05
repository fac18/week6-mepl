// get-data.js

const databaseConnection = require("./database/db_connection");

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

const checkExistingUsers = (requestedName, cb) => {
  databaseConnection.query(
    `SELECT id FROM users WHERE name = '${requestedName}'`,
    (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    }
  );
};

const getUsers = cb => {
  databaseConnection.query("SELECT * FROM users ORDER BY id", (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

const getUserData = (name, cb) => {
  databaseConnection.query(
    `SELECT name, kitty FROM users WHERE name= $1`,
    [name],
    (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    }
  );
};

const getItemsBought = (username, cb) => {
  databaseConnection.query(
    `SELECT fruit, stock, price 
    FROM users 
    INNER JOIN shop
    ON basket.fruit_id = shop.id
    WHERE name= '${username}'`,
    (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    }
  );
};

const getInventory = cb => {
  databaseConnection.query(
    "SELECT fruit, stock, price 
    FROM shop
    ORDER BY id",
    (err, res) => {
      if (err) => {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    }
  );
};

const getBasket = cb => {
  databaseConnection.query(
    "SELECT * FROM basket ORDER BY id",
    (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res.rows);
      }
    }
  );
};

module.exports = {
  createUser,
  checkExistingUsers,
  getUsers,
  getUserData,
  getItemsBought,
  getInventory,
  getBasket
};
