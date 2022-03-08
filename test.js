/* 

* Test file for logger module
* Made by: Mini51

*/
const logger = require("./logger");

 


// Import the logger 
const path = './log.txt';

//Removes all content from the log
logger.clean(path)


//Logs like normal but also includes a time stamp
logger.info(path, 'Default Test')

//logs with time stamp, a successful-tag and makes the text green
logger.pass(path, 'Pass Test')

//logs with time stamp, a warning-tag and makes the text yellow
logger.warning(path,'Warning Test ')

//logs with time stamp, a error-tag and makes the text red
logger.error(path,'Error Test')

