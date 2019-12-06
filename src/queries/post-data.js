// post-data.js

const dbConnection = require("../database/db_connection");


// needs to protect against script injections

const postName = (name, cb) => {
    let nameSplit = name.split('%3D')[1];
    console.log(nameSplit)
    dbConnection.query(
        `INSERT INTO users (name) VALUES ('${nameSplit}')`,
        // `SELECT kitty FROM users WHERE name = ('${name}')`,
        // [name],
      (err, res) => {
        if (err) {
          console.log(err);
          return;
        } 
      }
    );
  };

  module.exports = {
    postName
  };
  