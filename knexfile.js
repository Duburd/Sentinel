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
    connection: 'postgres://ipzuoeqobexmpm:66c4e8c6c722d7479843396810a9aedf22b8dd8914a2483fa688d03bb2ed054a@ec2-54-227-247-225.compute-1.amazonaws.com:5432/ddau38humj5gtg',
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