const expres = require('express')
const { message } = require('statuses')
const winston = require('winston')

const logger = winston.createLogger({
    level: 'warn',
    transports: [
        new winston.transports.Console({level: 'verbose'}),
        new winston.transports.File({filename: 'info.log', level: 'error'}),
    ]
})

/* LEVEL Logs
silly
debug
verbose
info
warn
error
*/
logger.silly('log silly')
logger.debug('log debug')
logger.verbose('log verbose')
logger.info('log info')
logger.warn('log warn')
logger.error('log error')

const app = expres()

app.get('/',(req, res) => {
    res.send(`Hello to the students, they rocks`.repeat(300))
})

app.listen(3000)