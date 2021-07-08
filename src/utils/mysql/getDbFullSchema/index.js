const { DataTypes } = require('sequelize');
const getDbWithDb = require('../getDbWithDb');

const getFullDbSchema = async (bootstrap = false) => {
  const connDb = await getDbWithDb(bootstrap);
  connDb.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  connDb.define('Monster', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    atk: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    def: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  await connDb.sync({ alter: true });
  return connDb;
};
module.exports = getDbFullSchema;
