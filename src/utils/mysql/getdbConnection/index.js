const express = require('express');
const mysql = require('mysql2');

const getdbConnection = database => {
  const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'J@son1979',
    ...(database ? { database } : {}),
  });
  return db;
};

module.exports = getdbConnection;
