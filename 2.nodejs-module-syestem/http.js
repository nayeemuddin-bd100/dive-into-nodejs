const http = require('http')

const server = http.createServer((req, res) => {
    //By Using req user can request anything to server 
    console.log(req.url)

    res.end( `<h2> Helloo Noode JS </h2>`)
})

server.listen(4141, () => {
    console.log(`Server is running on PORT 4141`)
})