import express from 'express';
import path from 'path';
import serveStatic from 'serve-static';

const app = express();

app.use(serveStatic(path.join(path.resolve(), 'dist'), {'index': ['index.html', 'index.htm']}));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port);

console.log('Servidor iniciado en el puerto: ' + port);


