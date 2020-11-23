const { expect, use } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chaiAsPromise = require('chai-as-promised');

use(sinonChai);
use(chaiAsPromise);

const { Logging } = require('../../src/utils');

describe.only('Logging', async () => {
  const sandbox = sinon.createSandbox();
  const logging = new Logging();

  beforeEach(() => {
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('Insert raw log', () => {
    it('should insert log to db', async () => {
      const inReq = '/search';
      const method = 'get';
      const data = { msg: 'success' }
      const statusCode = 200;
      sandbox.stub(logging.connection, 'query').resolves({ data: 1 });

      const result = await logging.insert(inReq, method, data, statusCode);

      expect(logging.connection.query).to.be.calledWith('INSERT INTO logging SET ?', { in_req: inReq, method, data, status_code: statusCode });
      expect(result).to.deep.equal({ data: 1 });
    });
  });
});