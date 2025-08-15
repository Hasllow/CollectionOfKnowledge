import { Router } from "express";

import { products as _products } from "./admin.js";

export const router = Router();

router.get("/", (req, res, next) => {
  const products = _products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

export default router;
