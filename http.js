
var http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === "/api") {
        res.write("Hello from api");
        res.end()
    }
    if (req.url === "/home")
        res.write("Hello connections from http");
    res.end()
})


const port = process.env.PORT || 5000

server.listen(port, () => {
    console.log(`connectiong to server ${port}`)
})