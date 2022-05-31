const log = require('../src/logger');
const path = require('path'); 

const logger = new log({
    // the relative path to the log file 
    path: './example/log.txt',
    // enable timestamp in the log
    timestamp: true,
});


logger.info('This is an info message');
logger.success('This is a success message');
logger.warning('This is a warning message');
logger.error('This is an error message');
