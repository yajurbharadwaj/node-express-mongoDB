const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message, logName) => {   //this is to export the function which is async which would recieve the message parameter//this creates unique id for each log item along with the message
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    console.log(logItem);
    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        //testing
        await fsPromises.appendFile(path.join(__dirname, 'logs', logName), logItem);
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = logEvents;