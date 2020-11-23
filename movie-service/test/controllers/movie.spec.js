const { expect, use } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chaiAsPromise = require('chai-as-promised');

use(sinonChai);
use(chaiAsPromise);

const { movieController } = require('../../src/controllers');

describe.only('Movie Controller', async () => {
  const sandbox = sinon.createSandbox();
  let req, res;

  beforeEach(() => {
    req = {
      originalUrl: '/',
      query: { key: '2cv3d4', title: 'Batman', page: 1 },
      locals: {
        axiosInstance: { get: sandbox.stub() },
        logging: { insert: sandbox.stub() }
      }
    };
    res = { status: sandbox.stub().returns( { send: sandbox.stub() } ) };
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('Search movie controller', () => {
    it('should return 200 when success when request to omdb api', async () => {
      const mockResultData = { Search: { data: 1 } };
      req.locals.axiosInstance.get.resolves({ data: mockResultData, config: { method: 'get' } });
      req.locals.logging.insert.resolves({ data: 1 });

      await movieController.searchMovie(req, res);

      expect(res.status).calledOnceWith(200);
      expect(res.status().send).calledWith(mockResultData);
    });

    it('should return 401 when Unauthorize when request to omdb api', async () => {
      req.locals.axiosInstance.get.rejects({ config: { method: 'get' }, response: { status: 401, data: { msg: 'failed' } } });
      req.locals.logging.insert.resolves({ data: 1 });

      await movieController.searchMovie(req, res);

      expect(res.status).calledOnceWith(401);
      expect(res.status().send).calledWith({ msg: 'failed' });
    });
  });

  describe('Detail movie controller', () => {
    it('should return 200 when success when request to omdb api', async () => {
      const mockResultData = { Search: { data: 1 } };
      req.locals.axiosInstance.get.resolves({ data: mockResultData, config: { method: 'get' } });
      req.locals.logging.insert.resolves({ data: 1 });

      await movieController.getMovieDetail(req, res);

      expect(res.status).calledOnceWith(200);
      expect(res.status().send).calledWith(mockResultData);
    });

    it('should return 401 when Unauthorize when request to omdb api', async () => {
      req.locals.axiosInstance.get.rejects({ config: { method: 'get' }, response: { status: 401, data: { msg: 'failed' } } });
      req.locals.logging.insert.resolves({ data: 1 });

      await movieController.getMovieDetail(req, res);

      expect(res.status).calledOnceWith(401);
      expect(res.status().send).calledWith({ msg: 'failed' });
    });
  });
});