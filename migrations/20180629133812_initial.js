exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments();
      table.string('first_name');
      table.string('last_name');
      table.string('phone_number');
      table.string('license_number');
      table.string('policy_number');
      table.string('uri');      
    }),
    knex.schema.createTable('media', function (table) {
      table.increments();
      table.string('type').notNullable();
      table.string('uri').notNullable();
      table.integer('user_id').references('id').inTable('users').onDelete('cascade');
      table.integer('report_id').references('id').inTable('reports').onDelete('cascade');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('reports', function (table) { //ref witnesses and media?
      table.increments();
      table.string('location');
      table.text('description');
      table.string('status');
      table.integer('user_id').references('id').inTable('users').onDelete('cascade');
      table.integer('vehicle_id').references('id').inTable('vehicles').onDelete('cascade');
      table.specificType('additionalDrivers', 'jsonb[]');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('messages', function (table) {
      table.increments();
      table.string('text');
      table.integer('user_id').references('id').inTable('users').onDelete('cascade');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('vehicles', function (table) {
      table.increments();
      table.integer('user_id').references('id').inTable('users').onDelete('cascade');
      table.string('plate', 6);
      table.string('make');
      table.string('model');
      table.string('year');
      table.string('color');
      table.string('damage'); //condition of vehicle
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    }),
    knex.schema.createTable('witnesses', function (table) {
      table.increments();
      table.integer('report_id').references('id').inTable('reports').onDelete('cascade');
      table.text('testimony');
      table.string('first_name');
      table.string('last_name');
      table.string('phone_number');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.raw('DROP TABLE users CASCADE'),
    knex.raw('DROP TABLE media CASCADE'),
    knex.raw('DROP TABLE reports CASCADE'),
    knex.raw('DROP TABLE vehicles CASCADE'),
    knex.raw('DROP TABLE messages CASCADE'),
    knex.raw('DROP TABLE witnesses CASCADE')
  ])
};
