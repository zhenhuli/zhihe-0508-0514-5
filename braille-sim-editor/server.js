const http = require('http');
const fs = require('fs');
const path = require('path');
const detectPort = require('detect-port');

const PORT_START = 3000;
const PORT_END = 3999;

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm'
};

async function findAvailablePort() {
  for (let port = PORT_START; port <= PORT_END; port++) {
    const availablePort = await detectPort(port);
    if (availablePort === port) {
      return port;
    }
  }
  throw new Error('No available port found in range 3000-3999');
}

function createServer(port) {
  const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') {
      filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
      if (error) {
        if (error.code === 'ENOENT') {
          fs.readFile('./index.html', (error, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
          });
        } else {
          res.writeHead(500);
          res.end('Server Error: ' + error.code);
        }
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  });

  server.listen(port, () => {
    console.log('\x1b[36m%s\x1b[0m', '╔════════════════════════════════════════════╗');
    console.log('\x1b[36m%s\x1b[0m', '║       盲文点阵模拟编辑器已启动             ║');
    console.log('\x1b[36m%s\x1b[0m', '╚════════════════════════════════════════════╝');
    console.log('');
    console.log('\x1b[32m%s\x1b[0m', `  本地访问: http://localhost:${port}`);
    console.log('');
    console.log('\x1b[33m%s\x1b[0m', '  按 Ctrl+C 停止服务器');
    console.log('');
  });

  return server;
}

async function startServer() {
  try {
    const port = await findAvailablePort();
    createServer(port);
  } catch (error) {
    console.error('\x1b[31m%s\x1b[0m', '启动失败:', error.message);
    process.exit(1);
  }
}

startServer();
