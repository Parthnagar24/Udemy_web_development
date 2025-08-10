import { createLogger, format, transports } from 'winston';

const { combine, timestamp, colorize, printf, json } = format;

// Custom format for console logs
const consoleLogForm = combine(
  colorize(),
  timestamp(),
  printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
  })
);

// Create logger instance
const logger = createLogger({
  level: 'info',
  format: combine(
    colorize(),
    timestamp(),
    json()
  ),
  transports: [
    new transports.Console({
      format: consoleLogForm // Use pretty format for console
    }),
    new transports.File({
      filename: 'app.log',   // Logs stored in this file
      format: combine(
        timestamp(),
        json()                // Use JSON format for files
      )
    })
  ]
});

export default logger;
