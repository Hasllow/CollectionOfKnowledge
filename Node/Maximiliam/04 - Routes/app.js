const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const db = require("./util/database");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const e = require("express");

// db.execute(
//   "CREATE TABLE IF NOT EXISTS products (id INT UNSIGNED NOT NULL AUTO_INCREMENT, name VARCHAR(255) NOT NULL, price DOUBLE NOT NULL, description TEXT NOT NULL, imageUrl VARCHAR(255) NOT NULL, PRIMARY KEY (id), UNIQUE INDEX id_UNIQUE (id ASC) VISIBLE)"
// );

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(4000);

// db.execute("SELECT * FROM products")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
