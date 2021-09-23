import express from "express";
import { router } from "./route";
//import { database } from "./db";
const connectDB = require("./db");

connectDB();

const app = express();
//const connectDB = require("./db");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const {
  NODE_ENV,
  PORT: productionPort,
  IP: productionIP,
} = process.env;



app.use('/', router);

if (NODE_ENV === "production") {
  app.listen(productionPort, productionIP, () =>
    console.log("Multiple uploader api started in production!")
  );
} else {
    console.log("heyyy")
  app.listen(3001, () =>
    console.log("Multiple uploader api started in development on port 3001!")
  );
}