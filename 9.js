// http
const http = require('http')
const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.end("Hello")
    } else if(req.url === '/about') {
        res.end("Cello")
    } else {
        res.end(
            <>
                <h1>Oops!</h1>
                <h3>We cant seem to find the page you are looking for.</h3>
                <a href="/">Back to home page</a>
            </>
        )
    }
})

server.listen(5000)