const mysql = require('mysql');

let pool = null;

const config = {
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'mkyong186mkyong186',
  database: 'fonebook'
};

module.exports = {
  getPool: () => {
    if (pool) return pool;

    pool = mysql.createPool(config);

    return pool;
  }
};
