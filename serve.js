const liveserver = require('live-server');

const params = {
  port: 8080,
  host: '0.0.0.0',
  root: 'public',
  open: false,
  logLevel: 2,
};

liveserver.start(params);