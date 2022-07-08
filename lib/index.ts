//import the promises functions from fs 
import * as fs from 'node:fs';
import * as path from 'node:path'; 
import * as process from 'node:process'; 


export class Logger { 

    private timestamp: boolean = false; 
    private path: string;
    private level: string; 

    /**
     * creates a new logger instance 
     * @param {object}options - the options to use 
     * @param {string} options.path - the path to the log file
     * @param {string} options.level - the level of the log 
     * @param {boolean }options.timestamp - whether to include a timestamp in the log
     */
    constructor(options: any) {
        this.timestamp = options.timestamp || false;
        this.path = options.path || './logs/';
        this.level = options.level || 'debug';
    }

    /** 
     * logs a message 
     * @param message - the message to log
     */
    public log ( message: string ) { 
        if(this.timestamp) { 
            message = `[${getTimestamp()}] ${this.level}: ${message}`
        } else { 
           message = `${this.level}: ${message}`
        }
        console.log(message);
        fs.promises.appendFile(path.join(process.cwd(), this.path), message + '\n')
    }
}

function getTimestamp():string {
    let date = new Date();
    let year = date.getFullYear(); 
    let month = fixDate(date.getMonth());
    let day = fixDate(date.getDate());
    let hour = fixDate(date.getHours());
    let minute = fixDate(date.getMinutes());
    let second = fixDate(date.getSeconds());


    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
} 


function fixDate(date: number): string { 
    if ( date < 10 ) {
        return `0${date}`;
    } else {
        return `${date}`;
    }
}
