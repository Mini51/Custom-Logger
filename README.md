# better logger 
A simple logger for js that logs to the console and to a file. 

setup the logger: 
```js
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
```

how to use it: 
```js
logger.info('This is an info message'); // [19:43:32][info] This is an info message
logger.success('This is a success message'); // [19:43:32][success] This is a success message
logger.error('This is an error message'); // [19:43:32][error] This is an error message
logger.warning('This is a warning message'); // [19:43:32][warning] This is a warning message
```

# logger options 
`path`: the path to the log file relative to the logger file. If you would like to make it better please make a PR to the repo

`timestamp`: if you would like to add a timestamp to the log message

