import express from "express";
import bodyParser from "body-parser";
import { router as adminRoutes } from "./routes/admin.js";
import { router as shopRoutes } from "./routes/shop.js";
import __dirname from "./util/path.js";
import path from "path";

const app = express();
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "../views/404.html"));
});

app.listen("3000");
