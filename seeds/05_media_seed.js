var faker = require('faker');

exports.seed = function (knex, Promise) {
  return knex('media')
    .insert([{
      type: 'image',
      uri: faker.image.cats(),
      report_id: 1
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 2
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 3
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 4
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 5
    },

  ]);
};
