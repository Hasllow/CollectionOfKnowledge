//docker run --name mysql -e MYSQL_ROOT_PASSWORD= -d -p 3306:3306 mysql:latest
const mysql2 = require("mysql2");

const pool = mysql2.createPool({
  host: "localhost",
  user: "root",
  database: "node",
  password: "1234#",
});

module.exports = pool.promise();
