/*
 *   Copyright (c) 2023
 *   All rights reserved.
 */
import path from "path";
import express from "express";
import nunjucks from "nunjucks";
import routes from "./routes";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 80;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//nunjucks and set view path resolve
nunjucks.configure(path.resolve(__dirname, "src/views"), {
  autoescape: true,
  express: app,
  watch: true,
});
//static files
app.use("/public", express.static(path.resolve(__dirname, "public")));

const apiRouter = express.Router();
apiRouter.use("/constants", routes);


app.use("/api", apiRouter);
app.get("**", (req:any, res:any) => {
  res.status(404).json({
    message: "Not Found",
  });
});



app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
