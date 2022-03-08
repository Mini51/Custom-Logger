// Import the logger 
const logger = require("../SRC/logger");

 
//Define the log path 
const path = './example.txt';

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