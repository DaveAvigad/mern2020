const http = require('https');
const Logger = require('./Logger');
const controller = require('./controller');
const port = process.env.PORT || 3000;

const server = http.createServer(controller);

server.listen(port, () => `listening on port ${port}`);
server.on('request', request => Logger.newRequest(request));
