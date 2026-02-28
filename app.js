const http = require('http');
const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <body style="font-family:Arial; text-align:center; padding:50px">
        <h1>🚀 AWS App Runner Demo</h1>
        <p>Deployed via GitHub Source Code</p>
        <p>Environment: ${process.env.APP_ENV || 'development'}</p>
        <p>Server time: ${new Date().toISOString()}</p>
      </body>
    </html>
  `);
});

server.listen(PORT, () => console.log(`Running on port ${PORT}`));
