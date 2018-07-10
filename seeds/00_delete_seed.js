exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reports').del()
    .then(knex('vehicles').del())
    .then(knex('users').del())
    .then(knex('media').del())
    .then(knex('messages').del())
    .then(knex('witnesses').del())
    .then(knex('admins').del());
};
