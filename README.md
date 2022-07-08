# This is my custom logger that I use for my projects.


## How to setup 

1. install dependencys
```bash
$ npm i 
```

2. build
```bash 
$ tsc 
```


## How to use

```js 
//require logger 
const { Logger } = require('./build/index');

//create the logger instances for the levels
const debug = new Logger({ 
    // path to the log file relative to CWD
    path: './log.txt',
    // the log level
    level: 'debug',
    // enables the timestamp on the logger (off by default)
    timestamp: true
});



// use .log() to log the message
debug.log('This is a debug message');
```

output: 
```
console: [2022-06-07 23:26:13] debug: This is a debug message


log file: [2022-06-07 23:26:13] debug: This is a debug message
```

When creating the instance you can pass in 3 options 

- `path` This option is to set the path to the log file. This is relative to CWD
- `level` This is the log level it will deisplay in the log message 
- `timestamp` This is a boolean option to enable the timestamp

