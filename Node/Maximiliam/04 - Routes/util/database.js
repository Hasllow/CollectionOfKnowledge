//docker run --name mysql -e MYSQL_ROOT_PASSWORD= -d -p 3306:3306 mysql:latest
// const mysql2 = require("mysql2");

// const pool = mysql2.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node",
//   password: "1234#",
// });

// module.exports = pool.promise();

const Sequelize = require("sequelize");

const sequelize = new Sequelize("node", "root", "1234#", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
