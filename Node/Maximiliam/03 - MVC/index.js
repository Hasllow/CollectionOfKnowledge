import express from "express";
import bodyParser from "body-parser";

import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";

import __dirname from "./util/path.js";
import path from "path";

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen("3000");
