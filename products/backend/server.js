//initializers server
const express = require("express");
const server = express();
const port = 3000;
const mongoose = require("mongoose"); //import mongoose
require("dotenv").config(); //import dotenv
const { DB_URI } = process.env;
const cors = require("cors");
const Products = require("./models/products"); //importing the model schema

//middleware
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

//db connection
mongoose.connect(DB_URI)
  .then(() => {
    server.listen(port, () => {
      console.log(`Database is connected\nServer is listening on ${port}`);
    });
  })
  .catch((error) => console.log(error.message));

//root route
server.get("/", (request, response) => {
  response.send("Server Is Liveeeee");
});

//get all products
server.get("/products", async (request, response) => {
  try {
    const products = await Products.find();
    response.send(products);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

//add new product
server.post("/add-products", async (request, response) => {
  const { productName, brand, image, price } = request.body;

  const newProduct = new Products({
    productName,
    brand,
    image,
    price,
  });

  try {
    await newProduct.save();
    response.status(201).send({ message: "Product added successfully" });
  } catch (error) {
    response.status(400).send({ message: error.message });
  }
});

//delte
server.delete("/delete-product/:id", async (request, response) => {
  const { id } = request.params;
  const objectId = new mongoose.Types.ObjectId(id);

  try {
    await Products.findByIdAndDelete(objectId);
    response.status(200).send({ message: "Product deleted successfully" });
  } catch (error) {
    response.status(404).send({ message: error.message });
  }
});

//update product
server.patch("/products/:id", async (request, response) => {
  const { id } = request.params;
  const { productName, brand, image, price } = request.body;
  const objectId = new mongoose.Types.ObjectId(id);

  try {
    await Products.findByIdAndUpdate(objectId, {
      productName,
      brand,
      image,
      price,
    });
    response.status(200).send({ message: "Product updated successfully" });
  } catch (error) {
    response.status(404).send({ message: error.message });
  }
});
