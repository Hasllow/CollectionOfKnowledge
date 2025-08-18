import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const basePath = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(basePath, "../data/products.json");

const getProductsFromFile = (cb) => {
  fs.readFile(filePath, (err, data) => {
    if (err) cb([]);

    cb(JSON.parse(data));
  });
};

export class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);

      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
}
