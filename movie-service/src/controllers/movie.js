/**
 * Search movie list by keyword
 *
 * @param {object} req - request
 * @param {object} res - response
 * @returns {object} - response object
 */
const searchMovie = async (req, res) => {
  const { key: apikey, title, page } = req.query;
  const omdbQuery = { params: { apikey, s: title, page } };
  const { axiosInstance, logging } = req.locals;

  try {
    const result = await axiosInstance.get('/', omdbQuery);

    logging.insert(req.originalUrl, result.config.method, JSON.stringify(omdbQuery), result.status);

    return res.status(200).send(result.data);
  } catch (error) {
    console.log('error', error);

    logging.insert(req.originalUrl, error.config.method, JSON.stringify(omdbQuery), error.response.status);

    return res.status(error.response.status).send(error.response.data);
  }
};

/**
 * Get movie detail by movie id
 *
 * @param {object} req - request
 * @param {object} res - response
 * @returns {object} - response object
 */
const getMovieDetail = async (req, res) => {
  const { key: apikey, id } = req.query;
  const omdbQuery = { params: { apikey, i: id } };
  const { axiosInstance, logging } = req.locals;

  try {
    const result = await axiosInstance.get('/', omdbQuery);

    logging.insert(req.originalUrl, result.config.method, JSON.stringify(omdbQuery), result.status);

    return res.status(200).send(result.data);
  } catch (error) {
    console.log('error', error);

    logging.insert(req.originalUrl, error.config.method, JSON.stringify(omdbQuery), error.response.status);

    return res.status(error.response.status).send(error.response.data);
  }
};

module.exports = { searchMovie, getMovieDetail };
