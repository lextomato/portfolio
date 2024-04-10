const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

app = express();
app.use(serveStatic(path.join(__dirname, 'dist'), {'index': ['index.html', 'index.htm']}));

const port = process.env.PORT || 8080;
app.listen(port);

console.log('Servidor iniciado en el puerto: ' + port);
