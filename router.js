const fs = require('fs')


const requestHandler = (req, res) =>{
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
        const body = []
        req.on('data',(chunk)=>{
            body.push(chunk)
            console.log(chunk)
        })
        req.on('end',()=>{
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1]
            console.log(parseBody.split('='))
            console.log(message)
            fs.writeFile('message.txt',message, (err)=>{
                res.statusCode = 302;
                res.setHeader('Location','/')
                return res.end()
            })
        })
    }
}

module.exports = requestHandler

//If we want to export multiple things then in that case wu can use 
// module.exports = {
//    request :requestHandler,
//    someText:'Some Text',
// }

// ############## OR ###########
// exports.request = requestHandler
// exports.someText = 'requestHandler'

