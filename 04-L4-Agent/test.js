const { exec } = require('child_process');
const child = exec('pnpm dev');
child.stdout.on('data', data => console.log(data));
child.stderr.on('data', data => console.error(data));
setTimeout(() => {
  const http = require('http');
  http.get('http://localhost:3032/16', res => {
    console.log('HTTP', res.statusCode);
    setTimeout(() => process.exit(0), 3000);
  }).on('error', e => console.error('HTTP Error', e.message));
}, 5000);
