const { server } = require('./server.js');

const PORT = 3000;

server.listen(PORT);
console.log(`Server running on http://localhost:${PORT}/`);