/** Database for lunchly */

const { Client } = require("pg");

// const db = new pg.Client("postgresql:///lunchly");

let db = new Client({
    host: "/var/run/postgresql/",
    database: "lunchly"
  });
  

db.connect();

module.exports = db;
