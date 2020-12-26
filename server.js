const express = require('express')
const morgan = require('morgan');
const bodyParser = require('body-parser')

const app = express()
app.use(morgan("dev"));

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',adminRoute);
app.use('/shop',shopRoute);

app.use((req,res,next)=>{
    res.status(404).send(`<h1>Page not found!</h1>`);
})

var server = app.listen(9000,function(){
    var port = server.address().port;
    console.log('Server is running on port',port);
})