import express from "express";

export const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Im in another middleware");
  res.send("Hello World from express");
});
