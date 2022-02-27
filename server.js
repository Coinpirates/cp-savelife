/*
  Created by orange1337
*/
const express       = require('express');
const path          = require('path');
const cookieParser  = require('cookie-parser');
const helmet        = require('helmet');
const compression   = require('compression');

const { logWrapper } = require('./wrapper');
process.env.NODE_APP_INSTANCE = process.env.NODE_APP_INSTANCE || 0;

const wrapper  = new logWrapper(`server_${process.env.NODE_APP_INSTANCE}`);

process.on('uncaughtException', (reason, err) => {
    wrapper.log(` ======= UncaughtException Main Server : `, err);
});
process.on('unhandledRejection', (reason, err) => {
  wrapper.log(` ======= UncaughtException Main Server : `, err);
});

const app  = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(compression());

app.set('view engine', 'html');
app.set('views', './dist/cp-savelife');

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src *; img-src * data:; script-src * 'unsafe-eval' 'unsafe-inline'; style-src * 'unsafe-inline';");
  return next();
});

// ################### create http node express server
const debug = require('debug')('asd:server');
const http = require('http');
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

app.use(express.static(path.join(__dirname, './dist/cp-savelife')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/cp-savelife/index.html'));
});

// ################### catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// ################### error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.sendFile(path.join(__dirname, './dist/cp-savelife/index.html'));
});

function normalizePort(val) {
  let port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port; 
  return false;
}
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  let bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
  switch (error.code) {
    case 'EACCES':
      wrapper.error(`${bind} requires elevated privileges`);
      break;
    case 'EADDRINUSE':
      wrapper.error(`${bind} is already in use`);
      break;
    default:
      throw error;
  }
}
function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
  wrapper.log(`Listening on ${bind}`);
}