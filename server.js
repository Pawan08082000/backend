const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use('/add-product',(req, res, next) => {
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

app.use('/product',(req, res, next) => {
    console.log(req.body)
    res.redirect('/') //Allow the request to continue to the next middleware in line
})

app.listen(9000)