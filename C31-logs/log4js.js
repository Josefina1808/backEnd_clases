const expres = require('express')
const log4js = require('log4js')

const app = expres()
log4js.configure({
    appenders: {
        myLoggerConsole: {type: 'console'},
        myLoggerFile: {type: 'file', filename: 'info.log'}
    },
    categories: {
        default: {appenders: ['myLoggerConsole'], level: 'trace'},
        consola: {appenders: ['myLoggerConsole'], level: 'debug'},
        archivo: {appenders: ['myLoggerFile'], level: 'warn'},
        todo: {appenders: ['myLoggerConsole', 'myLoggerFile'], level: 'error'},
    }
})

//LEVEL LOGS
// trace, debug, info, warn, error, fatal

const logger = log4js.getLogger()
logger.trace('Tamamos un cerveza')
logger.debug('La cerveza es corona')
logger.info('Cerveza fría')
logger.warn('La cerveza se está calentando')
logger.error('Cerveza caída')
logger.fatal('Se quebró la botella')

const loggerFile = log4js.getLogger('archivo')
loggerFile.trace('Tamamos un cerveza')
loggerFile.debug('La cerveza es corona')
loggerFile.info('Cerveza fría')
loggerFile.warn('La cerveza se está calentando')
loggerFile.error('Cerveza caída')
loggerFile.fatal('Se quebró la botella')

const loggerAll = log4js.getLogger('todo')
loggerAll.trace('Tamamos un cerveza')
loggerAll.debug('La cerveza es corona')
loggerAll.info('Cerveza fría')
loggerAll.warn('La cerveza se está calentando')
loggerAll.error('Cerveza caída')
loggerAll.fatal('Se quebró la botella')

app.get('/',(req, res) => {
    res.send(`Hello to the students, they rocks`.repeat(300))
})

app.listen(3000)