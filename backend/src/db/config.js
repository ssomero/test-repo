module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    logging: false,
    seederStorage: 'sequelize',
    define: {
      underscores: false,
      underscoresAll: false,
      freezeTableName: true,
      charset: 'utf-8',
    },
    pool: {
      max: 20,
      min: 0,
      idle: 20000,
      acquire: 20000,
    },
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    logging: false,
    define: {
      underscored: false,
      underscoredAll: false,
      freezeTableName: true,
      charset: 'utf8',
    },
    pool: {
      max: 20,
      min: 0,
      idle: 20000,
      acquire: 20000,
    },
  },
  test: {
    storage: ':memory:',
    dialect: 'sqlite',
    logging: false,
    define: {
      underscored: false,
      underscoredAll: false,
      freezeTableName: true,
      charset: 'utf8',
    },
    pool: {
      max: 20,
      min: 0,
      idle: 20000,
      acquire: 20000,
    },
  },
};
