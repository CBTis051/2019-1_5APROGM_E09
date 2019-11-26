var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'application/json; chartset=utf-8' });

res.end('Hola mundo Node JS Repo GIT – Quiroz Vega Kevin Alexis\n');
}).listen(8081);
console.log('Server running on port 8081');
