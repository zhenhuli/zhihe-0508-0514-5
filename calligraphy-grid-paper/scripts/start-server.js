const net = require('net');
const { spawn } = require('child_process');

const startPort = 1234;
const endPort = 1300;

function checkPort(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    
    server.once('error', () => {
      resolve(false);
    });
    
    server.once('listening', () => {
      server.close();
      resolve(true);
    });
    
    server.listen(port);
  });
}

async function findAvailablePort() {
  for (let port = startPort; port <= endPort; port++) {
    const isAvailable = await checkPort(port);
    if (isAvailable) {
      return port;
    }
  }
  return null;
}

async function startServer() {
  console.log('正在查找可用端口...');
  
  const port = await findAvailablePort();
  
  if (!port) {
    console.error('未找到可用端口，请手动指定端口');
    process.exit(1);
  }
  
  console.log(`找到可用端口: ${port}`);
  console.log('正在启动开发服务器...');
  
  const parcel = spawn('npx', ['parcel', 'src/index.html', '--port', port], {
    stdio: 'inherit',
    shell: true
  });
  
  parcel.on('error', (err) => {
    console.error('启动失败:', err);
  });
  
  parcel.on('exit', (code) => {
    console.log(`进程退出，代码: ${code}`);
  });
}

startServer();
