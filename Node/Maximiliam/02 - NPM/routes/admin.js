import express from "express";
import path from "path";

import __dirname from "../util/path.js";

export const router = express.Router();
export const products = [];

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views/add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});
