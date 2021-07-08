const { database } = require('../../../config');
const getdbConnection = require('../../mysql/getdbConnection');
const createDatabase = require('../../mysql/createDatabase');
const dropDatabase = require('../../mysql/DropDatabase');
const getDbWithDb = async (bootstrap = false) => {
  if (bootstrap) {
    await dropDatabase(database);
    const response = await createDatabase(database, true);
    return response;
  }
  return getdbConnection(database);
};

module.exports = getDbWithDb;
