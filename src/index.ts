/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
import path from 'path';
import express from 'express';
import nunjucks from 'nunjucks';
import constants from './constants';
import router from './routes';


const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//nunjucks and set view path resolve
nunjucks.configure(path.resolve(__dirname, 'views'), {
  autoescape: true,
  express: app,
  watch: true,
});
//static files
app.use('/static', express.static(path.resolve(__dirname, 'public')));


app.get('/', (req, res) => {
  res.redirect('/home');
});
app.use('/home',router.HOME)

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
