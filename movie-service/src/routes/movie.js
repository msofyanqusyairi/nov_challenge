const express = require('express');
const axios = require('axios');

const { resources: { omdb } } = require('../../config');
const { Logging } = require('../utils');
const { movieController: { searchMovie, getMovieDetail }} = require('../controllers');

const axiosInstance = axios.create({ baseURL: omdb.baseUrl, timeout: omdb.timeout });
const router = express.Router();
const logging = new Logging();

/**
 * Middleware to append external service
 *
 * @param {*} req - request object
 * @param {*} _ - response object (not use)
 * @param {*} next - next function to continue request
 */
const middleware = (req, _, next) => {
  req.locals = { axiosInstance, logging };

  next();
};

router.get('/search', middleware, searchMovie);
router.get('/detail', middleware, getMovieDetail);

module.exports = router;

