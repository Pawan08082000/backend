const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const adminRoute = require('./routes/admin');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.use(adminRoute);

var server = app.listen(9000,function(){
    var port = server.address().port;
    console.log('Server is running on port',port);
})