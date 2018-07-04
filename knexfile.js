require('dotenv').config();

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
      ssl: process.env.DB_SSL
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: 'postgres://xouomimfdwexbe:a040016886a2c7a6f999dcc810c60cf8e63d36f65f92738437f07d8e02e227b3@ec2-54-83-203-198.compute-1.amazonaws.com:5432/d40qes5fq71k43',
    pool: {
      min: 2,
      max: 10
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};