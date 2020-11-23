const mysql = require('mysql');

const { db } = require('../../config');

/**
 * Logging Class
 */
class Logging {
  /**
   * Logging Model Constructor
   * Init mysql connection
   */
  constructor() {
    // host: 'localhost',
    //   user: 'dbuser',
    //   password: 's3kreee7',
    //   database: 'my_db'
    const connection = mysql.createConnection(db);
    connection.connect();

    this.connection = connection;
  }

  /**
   * Insert log data to db
   *
   * @param {string} inReq - endpoint request
   * @param {string} method - HTTP method
   * @param {string} data - data will be send to external service
   * @param {string} statusCode - HTTP status code
   */
  async insert(inReq, method, data, statusCode) {
    const log = { 'in_req': inReq, method, data, 'status_code': statusCode };
  
    return this.connection.query('INSERT INTO logging SET ?', log);
  }
}

module.exports = Logging;
