
const express = require('express');
const morgan = require('morgan');
const http = require('http');
// const swaggerUi = require('swagger-ui-express');

const {
  service: { servicePort },
  logger
} = require('../config');
const routes = require('./routes');
// Get Swagger Document
// const swaggerDocument = require('../swagger.json');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));
// Swagger
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// router initialization
routes(app);

const server = http.createServer(app);

server.listen(servicePort, () => logger.info(`app running at :${servicePort}`));
