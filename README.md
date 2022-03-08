<h1 align='center'>Custom-logger</h1>
<p align="center">A custom NodeJS logging system</p>

<br>

<p style="font-weight:bold">Functions</p>

 - `logger.info(path, data)` Logs to the console just like console.log but also has a time stamp.

  - `logger.pass(path, data)` Logs a message to the console with a time stamp, succsessful-tag and in the color green.

  - `logger.warning(path, data)` Logs a message to the console with a time stamp, warning-tag and in the color yellow.

  - `logger.error(path, data)` Logs a message to the console with a time stamp, error-tag and in the color red
  
  - `logger.clean(path)` Clears the log file so that there is no content from the precious log.  

<br>
<h1 align="center">Example</h1>

```js
// Import the logger 
const logger = require("./logger");

 
//Define the log path 
const path = './log.txt';

//Removes all content from the log file
logger.clean(path)



//Logs  --> "[16:49:7] Default Test" in grey
logger.info(path, 'Default Test')



//logs -->  "[16:49:7][successful] Pass Test" in green
logger.pass(path, 'Pass Test')



//logs --> " [16:49:7][Warning] Warning Test" in yellow
logger.warning(path,'Warning Test ')



//logs --> " [16:49:7][Error] Error Test" in red
logger.error(path,'Error Test')
```

<hr>
<p>Made with ❤️ by: mini51</p>