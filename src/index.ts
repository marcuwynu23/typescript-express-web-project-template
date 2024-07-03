/*
 *   Copyright (c) 2023
 *   All rights reserved.
 */
import path from "path";
import express from "express";
import nunjucks from "nunjucks";
import routes from "./routes";
const app = express();
const port = process.env.PORT || 80;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//nunjucks and set view path resolve
nunjucks.configure(path.resolve(__dirname, "views"), {
  autoescape: true,
  express: app,
  watch: true,
});
//static files
app.use("/public", express.static(path.resolve(__dirname, "public")));

const apiRouter = express.Router();
apiRouter.use("/constants", routes.CONSTANTS_ROUTES);


app.use("/api", apiRouter);
app.get("**", routes.NOT_FOUND);



app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
