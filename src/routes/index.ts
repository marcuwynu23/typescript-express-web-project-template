/*
 *   Copyright (c) 2023
 *   All rights reserved.
 */
import express from "express";

let HOME_ROUTE = express.Router();
//get
HOME_ROUTE.get("/", (req: any, res: any) => {
  res.render("home.html", { title: "Home" });
});
//post
HOME_ROUTE.post("/", (req: any, res: any) => {
  res.send("Hello World!");
});
//put
HOME_ROUTE.put("/", (req: any, res: any) => {
  res.send("Hello World!");
});
//delete
HOME_ROUTE.delete("/", (req: any, res: any) => {
  res.render("home.html", { title: "Home" });
});

const NOT_FOUND = function (req: any, res: any) {
  res.render("404.html", { title: "Not Found" });
};
export default {
  HOME_ROUTE,
  NOT_FOUND,
};
