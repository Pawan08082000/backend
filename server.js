const http = require('http')

const server = http.createServer((req,res) => {
    // console.log('req.url : ',req.url,' req.method : ',req.method,' req.headers : ', req.headers)
    // process.exit() //used for closing the server
    res.setHeader('content-Type', 'text/html')
    res.write(`<html>
    <head>
    <title>Pawan Tiwari</title></head></html>`)
});

server.listen(9000)