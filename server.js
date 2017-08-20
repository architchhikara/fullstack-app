import config from './config';
import apiRouter from './api';
import sassMiddleWare from 'node-sass-middleware';
import path from 'path';

//For file system
// import fs from 'fs';

import express from 'express';
const server = express();

server.use(sassMiddleWare({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

import './serverRender';

server.get('/', (req, res) => {
  res.render('index', {
    content: '...'
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express is ears on port ', config.port);
});












// Creating server with http module
// import http from 'http';
// const server = http.createServer();
// server.listen(8080);
// server.on('request', (req, res) => {
//   res.write('Hello Sirji!\n');
//   setTimeout(() => {
//     res.write('This is how I hold');
//     res.end;
//   }, 3000);
// });

// Testing the basic imports
// import config, {nodeEnv} from './config'; 
// console.log(config, nodeEnv);

// Playing with the http or https
// import http from 'http';
// http.get('http://www.geeksforgeeks.org/data-structures/', res => {
//   console.log('Response status code: ', res.statusCode);
//   // console.log('Response: ', res.connection);
//   res.on('data', chunk => {
//     console.log(chunk.toString());
//   });
// });