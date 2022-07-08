"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
//import the promises functions from fs 
const fs = __importStar(require("node:fs"));
const path = __importStar(require("node:path"));
const process = __importStar(require("node:process"));
class Logger {
    /**
     * creates a new logger instance
     * @param {object}options - the options to use
     * @param {string} options.path - the path to the log file
     * @param {string} options.level - the level of the log
     * @param {boolean }options.timestamp - whether to include a timestamp in the log
     */
    constructor(options) {
        this.timestamp = false;
        this.timestamp = options.timestamp || false;
        this.path = options.path || './logs/';
        this.level = options.level || 'debug';
    }
    /**
     * logs a message
     * @param message - the message to log
     */
    log(message) {
        if (this.timestamp) {
            message = `[${getTimestamp()}] ${this.level}: ${message}`;
        }
        else {
            message = `${this.level}: ${message}`;
        }
        console.log(message);
        fs.promises.appendFile(path.join(process.cwd(), this.path), message + '\n');
    }
}
exports.Logger = Logger;
function getTimestamp() {
    let date = new Date();
    let year = date.getFullYear();
    let month = fixDate(date.getMonth());
    let day = fixDate(date.getDate());
    let hour = fixDate(date.getHours());
    let minute = fixDate(date.getMinutes());
    let second = fixDate(date.getSeconds());
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}
function fixDate(date) {
    if (date < 10) {
        return `0${date}`;
    }
    else {
        return `${date}`;
    }
}
