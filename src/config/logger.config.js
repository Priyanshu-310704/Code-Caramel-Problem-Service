import winston from "winston";
import{ MongoDB } from "winston-mongodb";
import { LOG_DB_URL } from "./server.config.js";
const allowedTransports=[]
allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format:'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf((log)=>`${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));

allowedTransports.push(new winston.transports.MongoDB({
    level: 'error',
    db: LOG_DB_URL,
    collection: 'logs',

}))

allowedTransports.push(new winston.transports.File({
    filename: 'app.log'
}))
const logger=winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({
            format:'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf((log)=>`${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),
    transports:allowedTransports,

})
export default logger;