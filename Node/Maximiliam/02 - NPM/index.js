import express from "express";
import bodyParser from "body-parser";
import { router as adminRoutes } from "./routes/admin.js";
import { router as shopRoutes } from "./routes/shop.js";

const app = express();

app.use(bodyParser.urlencoded());

app.use(shopRoutes);
app.use(adminRoutes);

app.listen("3000");
