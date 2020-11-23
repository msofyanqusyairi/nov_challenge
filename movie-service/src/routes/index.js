const movieRoutes = require('./movie');

const routers = [ movieRoutes ];

module.exports = (app) => {
  routers.forEach(router => app.use(router));
};
