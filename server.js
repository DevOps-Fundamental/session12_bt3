const http = require('http');

const port = process.env.PORT || 3000;
const appEnv = process.env.APP_ENV || 'development';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    status: 'running',
    environment: appEnv,
    timestamp: new Date().toISOString()
  }));
});

server.listen(port, () => {
  console.log(`Server listening on port ${port} in ${appEnv} mode`);
});
