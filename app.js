const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end(`
    <body style="background:#0a0a0a; color:white; font-family:Arial; text-align:center; padding:50px;">
      <h1 style="font-size:50px;">🔥 FALA, SOU O MOISES 🔥</h1>
      <h2>Dev Fullstack - G15 na veia</h2>
      <p style="font-size:20px; margin-top:30px;">Meu primeiro servidor Node.js ta ON!</p>
      <button onclick="alert('BOORA! Primeiro software rodando!')" style="padding:15px 30px; font-size:18px; background:#00ff88; border:none; border-radius:10px; cursor:pointer; margin-top:20px;">CLICA AQUI</button>
      <p style="margin-top:40px; opacity:0.5;">localhost:3000 - 2026</p>
    </body>
  `);
});

server.listen(3000, () => {
  console.log('TA NO AR! Vai no localhost:3000');
});