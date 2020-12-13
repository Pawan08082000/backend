const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
    // console.log('req.url : ',req.url,' req.method : ',req.method,' req.headers : ', req.headers)
    // process.exit() //used for closing the server
    let url = req.url
    let method = req.method
    if (url === '/') {
        res.setHeader('content-Type', 'text/html')
        res.write(`<html>
    <head>
    <title>Pawan Tiwari</title></head>
    <body>
    <form action="/message" method="POST">
    <input type='text' name='message'>
    <button type='submit'>send</button>
    </form></body></html>`)
    }
    if(method === 'POST' && url ==='/message'){
        fs.writeFileSync('message.txt', 'DUmmy Data')
        res.statusCode = 302;
        res.setHeader('Location','/')
        return res.end()
    }
});

server.listen(9000)