require('dotenv').config();
const bunyan = require('bunyan');

const logger = bunyan.createLogger({name: 'movie-service'});

const config = {
  service: {
    servicePort: parseInt(process.env.SERVICE_PORT)
  },
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
  },
  resources: {
    omdb: {
      baseUrl: process.env.OMDB_BASE_URL,
      timeout: process.env.OMDB_TIMEOUT
    }
  },
  logger
};

module.exports = config;
