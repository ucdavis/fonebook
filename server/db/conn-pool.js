const mysql = require('mysql');

let pool = null;

const config = {
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: process.env.FONEBOOK_DB_PASSWORD,
  database: 'fonebook'
};

module.exports = {
  getPool: () => {
    if (pool) return pool;

    pool = mysql.createPool(config);

    return pool;
  }
};
