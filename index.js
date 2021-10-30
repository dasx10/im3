const http = require('http');
const fs = require('fs/promises');

const PORT = process.env.PORT || 3000;


http.createServer(async function(request, response) {
    try {
        const file = request.url.indexOf('.') > -1 ? '' : 'index.html';
        const data = await fs.readFile('./public' + request.url + file);
        response.end(data)
    } catch {
        response.end('');
    }
}).listen(PORT);
