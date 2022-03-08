const fs = require('fs')


//* define style for each type of log
const colors = {

    default: "\x1b[1m",
    Pass: "\x1b[32m", 
    Warn: "\x1b[33m", 
    Error: "\x1b[31m",
    Reset: "\x1b[0m"

}

//* Get current time and then seperates it into hrs min sec
const day = new Date()
const hrs = day.getHours();
const min = day.getMinutes();
const sec = day.getSeconds();


//* Setting up var
var formated;


module.exports = {
    


    //* when called will log normal messages to the console and debuf file    
    info: function(path, data) {

        formated = `[${hrs}:${min}:${sec}] ${data}`

        console.log(colors.default, formated, colors.Reset)
        fs.appendFile(path,formated + '\n', () => { 

        })
    },

    //*  When called will log pass messages to console and debug file  
    pass: function(path, data) {

        formated = `[${hrs}:${min}:${sec}][successful] ${data}`

        console.log(colors.Pass,formated, colors.Reset)
        fs.appendFile(path,formated + '\n', () => { 

        })
    },
    
    //* When called will log warnings to the consoole and debug file
    warning: function(path, data) {
        formated = `[${hrs}:${min}:${sec}][Warning] ${data}`

        console.log(colors.Warn,formated, colors.Reset)
        fs.appendFile(path,formated + '\n', () => { 

        })
    },

    //* When called will log errors to the consoole and debug file
    error: function(path, data) {
        formated = `[${hrs}:${min}:${sec}][Error] ${data}`

        console.log(colors.Error,formated, colors.Reset)
        fs.appendFile(path,formated + '\n', () => { 

        })

    },
    
    custom: function(path, tag, data) { 
        formated = `[${hrs}:${min}:${sec}][${tag}] ${data}`
        
        console.log(colors.default, formated, colors.Reset); 
        fs.appendFile(path,formated, () => { 
            
            
        })
    },
    
    //* Clears log file 
    clean: function(path) {
        fs.truncate(path, 0 , () => { 

        })
    }
};
