
import express from "express";
import constantsRoutes from "./constants-route";

const NOT_FOUND = function (req: any, res: any) {
  res.status(404).json({
    message: "Not Found",
  });
};
export default {
  CONSTANTS_ROUTES: constantsRoutes,
  NOT_FOUND,
};
