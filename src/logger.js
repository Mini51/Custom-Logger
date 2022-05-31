const fs = require('fs');
const path = require('path'); 
const process = require('process'); 

class logger {
    constructor(options) {
        this.path = options.path;
        this.timestamp = options.timestamp || false;
    }

    info(message) { 
        if(this.timestamp) { 
            message =  `[${getTime()}][info] ${message}`;
        }
        
        console.log(message); 
        fs.appendFileSync(path.join(process.cwd(), this.path), message + '\n', (err) => { 
            if(err) {
                console.log(err);
            }
        });
    } 


    success(message) {
        if (this.timestamp) {
            message = `[${getTime()}][success] ${message}`;
        } else {
            message = `${message}`;
        }
        // log the message to the file and console
        console.log(message);
        fs.appendFile(path.join(process.cwd(), this.path), message + '\n', (err) => {
            if (err) console.log(err);
        });
    }


    warning(message) {
        if (this.timestamp) {
            message = `[${getTime()}][warning] ${message}`;
        } else {
            message = `${message}`;
        }
        
        // log the message to the file and console 
        console.log(message);
        fs.appendFile(path.join(process.cwd(), this.path), message + '\n', (err) => {
            if (err) console.log(err);
        });
    }


    error(message) { 
        if (this.timestamp) {
            message = `[${getTime()}][error] ${message}`;
        } else {
            message = `${message}`;
        }
        // log the message to the file and console 
        console.log(message);
        fs.appendFile(path.join(process.cwd(), this.path), message + '\n', (err) => {
            if (err) console.log(err);
        });
    }

}


// functions for the timestamp in the log 
function getTime()  { 
    let day = new Date()
    let hrs = day.getHours();
    let min = day.getMinutes();
    let sec = day.getSeconds();
    min = fixTime(min);
    sec = fixTime(sec);
    return hrs + ":" + min + ":" + sec;
}

function fixTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
}




module.exports = logger;
