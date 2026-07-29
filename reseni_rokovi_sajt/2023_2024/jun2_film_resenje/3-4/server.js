const http = require('http')
const app = require('./app')

const server = http.createServer(app)

const port = 3001

server.listen(port)

server.once('listening', function(){
    console.log(`Server is listening on http://localhost:${port}`)
})
