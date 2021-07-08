const express = require('express');
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'J@son1979',
  database: 'monster_arena_rumble',
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected');
});

const app = express();

const getDbConnectionWithDb = async () => {
  let sql = 'CREATE DATABASE monster_arena_rumble';
  db.query(sql, err => {
    if (err) {
      throw err;
      res.send('Database created');
    }
  });
};

app.listen('3000', () => {
  console.log('Sever started on port 3000');
});
const createUser = async () => {
  let sql =
    'CREATE TABLE users(id int AUTO_INCREMENT, name VARCHAR(45), PRIMARY KEY(id))';
  db.query(sql, err => {
    if (err) {
      throw err;
    }

    let post = {
      name: 'Jason Movsowitz',
    };
    let sql = 'INSERT INTO users SET ?';
    let query = db.query(sql, post, err => {
      if (err) {
        throw err;
      }
      console.log('Pass');
    });
  });
};
const updateUser = () => {
  let newName = 'Jason Awesome Movsowitz';
  let sql = `UPDATE users SET name = '${newName}' `;
  let query = db.query(sql, err => {
    if (err) {
      throw err;
    }
    // res.send('User update');
  });
};

//create new table
const createMonster = async () => {
  let sql =
    'CREATE TABLE monsters(id int AUTO_INCREMENT, name VARCHAR(45), hp int, atk int, def int, userId int, PRIMARY KEY(id))';
  db.query(sql, err => {
    if (err) {
      throw err;
    }
  });
};
const testSuite = async () => {
  console.log('BEGIN TESTS\n\n');
  await getDbConnectionWithDb(true);
  await createUser();
  await updateUser();
  await createMonster();
  //   await updateMonster();
  //   await growMonster();
  //   await fight();
  console.log('\n\nEND TESTS');
};

testSuite();
