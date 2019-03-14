const http = require('http');

const server = http.createServer((request, response) => {
    response.end(`Hello from ${request.url}`)
})

server.on('error', (error) => {
    console.error('Server error:\n', error)
})

server.listen(3030, () => {
    console.log('Server listening on port: 3030')
})
