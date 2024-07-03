
import express from "express";
import constantsRoutes from "./constants-route";

const NOT_FOUND = function (req: any, res: any) {
  res.render("404.html", { title: "Not Found" });
};
export default {
  CONSTANTS_ROUTES: constantsRoutes,
  NOT_FOUND,
};
