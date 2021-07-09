const express = require('express');
const mysql = require('mysql2');
const { integer } = require('casual');
const knex = require('knex');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'J@son1979',
  database: 'monster_arena_rumble',
});

const app = express();

const getDbConnectionWithDb = async () => {
  let sql = 'CREATE DATABASE IF NOT EXISTS monster_arena_rumble';
  db.query(sql, err => {
    if (err) {
      throw err;
    }
  });
};

const createUser = async () => {
  let sql =
    'CREATE TABLE IF NOT EXISTS users(id int AUTO_INCREMENT, name VARCHAR(45), PRIMARY KEY(id))';
  db.query(sql, err => {
    if (err) {
      throw err;
    }

    let post = {
      name: 'Jason Movsowitz',
    };
    let sql = 'INSERT INTO users SET ?';
    db.query(sql, post, err => {
      if (err) {
        throw err;
      }
    });
  });
};

const updateUser = async () => {
  let newName = 'Jason Awesome Movsowitz';
  let sql = `UPDATE monster_arena_rumble.users SET name = 'Jason Awesome Movsowitz' WHERE (id = '1')`;
  db.query(sql, err => {
    // if (err) {
    //   throw err;
    // }
  });
};

//create new table
const createMonster = async () => {
  let sql =
    'CREATE TABLE IF NOT EXISTS monsters(id int AUTO_INCREMENT, name VARCHAR(45), hp int, atk int, def int, userId int, PRIMARY KEY(id))';
  db.query(sql, err => {
    if (err) {
      throw err;
    }
    let post = {
      name: 'Pooky',
      userId: 1,
      hp: integer(100, 200),
      atk: integer(100, 200),
      def: integer(100, 200),
    };
    let sql = 'INSERT INTO monsters SET IF NOT EXISTS ?';
    db.query(sql, post, err => {
      if (err) {
        throw err;
      }
    });
  });
};
const testSuite = async () => {
  console.log('Sever started on port 3000');
  console.log('BEGIN TESTS\n\n');
  await getDbConnectionWithDb(true);
  await createUser();
  await updateUser();
  // await createMonster();
  //   await updateMonster();
  //   await growMonster();
  //   await fight();
  console.log('\n\nEND TESTS');
};
testSuite();

app.listen('3000', () => {});
