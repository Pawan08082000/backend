const http = require('http')

const server = http.createServer((req,res) => {
    console.log('req.url : ',req.url,' req.method : ',req.method,' req.headers : ', req.headers)
    // req.url :  /  req.method :  GET  req.headers :  {
    //     host: '127.0.0.1:9000',
    //     connection: 'keep-alive',
    //     'cache-control': 'max-age=0',
    //     'sec-ch-ua': '"Google Chrome";v="87", " Not;A Brand";v="99", "Chromium";v="87"',
    //     'sec-ch-ua-mobile': '?0',
    //     'upgrade-insecure-requests': '1',
    //     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
    //     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    //     'sec-fetch-site': 'none',
    //     'sec-fetch-mode': 'navigate',
    //     'sec-fetch-user': '?1',
    //     'sec-fetch-dest': 'document',
    //     'accept-encoding': 'gzip, deflate, br',
    //     'accept-language': 'en-US,en;q=0.9,hi;q=0.8',
    //     cookie: 'csrftoken=0DwgC3v34xfHDTOOCET8XDxmY04lEbGzIiTPfVpuMu3PgSkRrdKkoTZ0jFBW0qsv'
    // }


    // process.exit() //used for closing the server
});

server.listen(9000)