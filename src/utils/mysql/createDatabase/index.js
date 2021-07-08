const express = require('express');
const getdbConnection = require('../getdbConnection');
const app = express();

const createDatabase = async (database, returnNewConnection = false) => {
  const connDb = getdbConnection();
  await connDb.query(`CREATE DATABASE IF NOT EXISTS \`${database}\``);
  if (returnNewConnection) {
    return getdbConnection(database);
  }
};
module.exports = createDatabase;
