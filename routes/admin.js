const express = require('express');

const router = express.Router();

router.get('/add-product',(req, res, next) => {
    console.log('In another middleware')
    res.send(`<html>
    <head>
    <title>Pawan Tiwari</title></head>
    <body>
    <form action="/product" method="POST">
    <input type='text' name='message'>
    <button type='submit'>send</button>
    </form></body></html>`)
})

router.post('/product',(req, res, next) => {
    console.log(req.body)
    res.redirect('/') //Allow the request to continue to the next middleware in line
})

module.exports =  router;
