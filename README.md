<h1 align='center'>Custom-logger</h1>
<p align="center">A custom NodeJS logging system</p>

<br>



<p style="font-weight:bold">Functions</p>

- `logger.info(path, data)` Logs to the console just like console.log but will also have a timestamp and it will also log to the log file.

- `logger.pass(path, data)` Logs a message to the console and the log file with a timestamp, successful-tag, and in the color green.

- `logger.warning(path, data)` Logs a message to the console and the log file with a timestamp, warning-tag, and in the color yellow.

- `logger.error(path, data)` Logs a message to the console with a timestamp, error-tag, and in the color red

- `custom(path, tag-name, data)` Logs a message to the console with a timestamp, custom-tag, and in white

- `logger.clean(path)` Clears the log file.
  




<br>
<h1 align="center">Example</h1>

```js
// Import the logger 
const logger = require("./logger");

 
//Define the log path 
const path = './log.txt';


//Removes all content from the log file
//You shoud run this at the start of your file so that the previous log is cleared 
logger.clean(path)



//Logs  -->  [13:41:24] Default Test in white
logger.info(path, 'Default Test')



//logs -->  [13:41:24][successful] Pass Test in green
logger.pass(path, 'Pass Test')



//Logs -->  [13:41:24][Warning] Warning Test in yellow
logger.warning(path,'Warning Test ')




//logs -->  [13:41:24][Error] Error Test in red
logger.error(path,'Error Test')



//Logs -->  [13:41:24][Custom] Custom Test in white
logger.custom(path, 'Custom', 'Custom Test')
```

<hr>
<p>Made with ❤️ by: mini51</p> 