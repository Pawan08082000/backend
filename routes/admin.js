const express = require('express');

const router = express.Router();

// /admin/add-product => get
router.get('/add-product',(req, res, next) => {
    console.log('In another middleware')
    res.send(`<html>
    <head>
    <title>Pawan Tiwari</title></head>
    <body>
    <form action="/admin/add-product" method="POST">
    <input type='text' name='message'>
    <button type='submit'>send</button>
    </form></body></html>`)
})

// /admin/add-product => post
router.post('/add-product',(req, res, next) => {
    console.log(req.body)
    res.redirect('/shop/shop') //Allow the request to continue to the next middleware in line
})

module.exports =  router;
