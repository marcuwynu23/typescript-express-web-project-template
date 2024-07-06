/*
 *   Copyright (c) 2023
 *   All rights reserved.
 */
import express from "express";
import routes from "./routes";
import dotenv from "dotenv";
import "./database/";

dotenv.config();
const app = express();
const port = process.env.PORT || 80;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
