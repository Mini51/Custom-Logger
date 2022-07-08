const { Logger } = require('./build/index');
const process = require('process'); 
const debug = new Logger({ 
    path: './log.txt',
    level: 'debug',
    timestamp: true
});

const info = new Logger({ 
    path: './log.txt',
    level: 'info',
    timestamp: true
});

const warn = new Logger({ 
    path: './log.txt',
    level: 'warn',
    timestamp: true
});

const error = new Logger({
    path: './log.txt',
    level: 'error',
    timestamp: true
});


debug.log('This is a debug message');
info.log('This is an info message');
warn.log('This is a warning message');
error.log('This is an error message');

