import express from 'express';
import cors from 'cors';
import { router as usersRouter } from './routes/game-statistics';
import { requestLog } from './middleware/request-log';
import { clientErrorHandler, errorHandler, logErrors } from './middleware/errors';
import winston from 'winston';
import expressWinston, { ErrorLoggerOptions } from 'express-winston';




const app = express();

const format = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.align(),
  winston.format.json(),
  winston.format.printf((info) => {
    const {
      timestamp, level, message, ...args
    } = info;

    const ts = timestamp.slice(0, 19).replace('T', ' ');
    return `${ts} [${level}]: ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
  }),
);


const loggerOptions = () => ({
  transports: [
    new winston.transports.Console(),
  ],
  format,
});

app.use(express.json());
app.use(cors());
app.use(requestLog);
// app.use(expressWinston.logger(loggerOptions()));
// app.use(expressWinston.errorLogger(loggerOptions()));
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);
app.use('/api', usersRouter);

export { app };
