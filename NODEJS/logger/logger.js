const fs = require('fs') // Import the file system module
const os = require('os') // Import the operating system module

const EventEmitter = require('events'); // Import the events module

class Logger extends EventEmitter {
    // Logger class extends EventEmitter to emit events
    log(message) {
        this.emit('message', { message }); // Emit a 'message' event with the message (throws a message )
    }
}

const logger = new Logger(); // Create a new instance of Logger
const logPath = 'logger/eventLogs.txt'; // Path to the log file

const logToFile = (event) => {
    // Function to log messages to a file
    const logMessage = `${new Date().toISOString()} - ${event.message}\n`; // Format the log message with a timestamp
    fs.appendFileSync(logPath, logMessage); // Append the log message to the file
}

logger.on('message', logToFile); // Listen for 'message' events and call logToFile
// this is only triggered when log function is called (this.emmit is executed)

setInterval(() => {
    // Log memory usage every 3 seconds
    const memoryUsage = 100 - (os.freemem / os.totalmem) * 100; // Calculate memory usage percentage
    logger.log(`Currently your memory usage is ${memoryUsage.toFixed(2)}%`); // Log the memory usage
}, 3000);

logger.log(`Applicatio started`) // Log application start
logger.log(`Applicatio Event occured`) // Log an application event