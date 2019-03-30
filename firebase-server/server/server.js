const http = require('http');
const app = require('./app.js')

const port = process.env.PORT || 8081;

const server = http.createServer(app);

server.listen(port);
console.log(`listening on port ${port}`);