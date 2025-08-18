import { Router } from "express";
import productsController from "../controllers/products.js";

const router = Router();

router.get("/add-product", productsController.getAddProduct);

router.post("/add-product", productsController.postAddProduct);

export default router;
