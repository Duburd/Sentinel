const settings = require("./settings"); // settings.json

module.exports = {

 development: {
   client: 'pg',
   connection: settings
 },

 staging: {
   client: 'postgresql',
   connection: {
     database: 'lhlfinal',
     user:     'matti',
     password: '1234'
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
   connection: {
     database: 'lhlfinal',
     user:     'matti',
     password: '1234'
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
