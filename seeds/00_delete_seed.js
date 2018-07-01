exports.seed = function (knex, Promise) {
  return knex('reports', 'users', 'vehicles')
    .del()
}