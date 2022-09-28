// ini membuat rekues http
const http = require('http')

const moment = require('moment')

//membuat server
const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/welcome': welcome(res); break;
        case '/': end(res); break;
        default: page404(res); break
    }
})

const welcome = res => {
    res.statusCode = 200,
        res.setHeader('Content-Type', 'text/json')
    res.write(JSON.stringify({
        status: 'SuccessFully',
        message: 'Welcome To MERN Class',
        study: 'Node JS',
        loginAt: moment()
    }));
    res.end()
}

const page404 = res => {
    res.statusCode = 404,
        res.setHeader('Content-Type', 'text/json')
    res.write(JSON.stringify({
        status: 'Failed',
        message: 'Resource Not Found'
    }));
    res.end()
}

const end = res => {
    res.end('<h1>Home</h1>')
}

server.listen(3000, () => console.log('server runing at http://127.0.0.1:3000'))