/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
import express from 'express';

let homeRouter = express.Router();
//get
homeRouter.get('/', (req, res) => {
	res.render('home.html', { title: 'Home' })
});
//post
homeRouter.post('/', (req, res) => {
	res.send('Hello World!');
});
//put
homeRouter.put('/', (req, res) => {
	res.send('Hello World!');
});
//delete
homeRouter.delete('/', (req, res) => {
	res.render('home.html', { title: 'Home' })
});


export default {
	HOME: homeRouter,
}