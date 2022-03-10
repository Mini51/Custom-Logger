// Import the logger 
const logger = require('../package/logger')

 
//Define the log path 
const path = './example.txt';

//Removes all content from the log file
logger.clean(path)



//Logs  --> "[16:49:07] Default Test" in grey
logger.info(path, 'Default Test')



//logs -->  "[16:49:07][successful] Pass Test" in green
logger.pass(path, 'Pass Test')



//logs --> " [16:49:07][Warning] Warning Test" in yellow
logger.warning(path,'Warning Test')



//logs --> " [16:49:07][Error] Error Test" in red
logger.error(path,'Error Test')

//Logs --> 
logger.custom(path, 'Custom', 'Custom Test')