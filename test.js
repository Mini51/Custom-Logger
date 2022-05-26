const log = require('../src/logger');
const path = require('path'); 

const logger = new log({
    // the .. is to go to go out of the modules folder and go to the parent folder
    path: path.join(__dirname, '../example/log.txt'),
    // enable timestamp in the log
    timestamp: true,
});


logger.info('This is an info message');
logger.success('This is a success message');
logger.error('This is an error message');
logger.warning('This is a warning message');
