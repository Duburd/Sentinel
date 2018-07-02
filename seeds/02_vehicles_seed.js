var faker = require('faker');

exports.seed = function (knex, Promise) {
    return knex('vehicles')
    .insert([{
        user_id: 1,
        plate:   'AAA000',
        make:    'BMW',
        model:   'M3',
        year:    2015,
        color:   'white',
        damage:  'passenger-side door'
      },
      {
        user_id: 2,
        plate:   'BBB000',
        make:    'Porsche',
        model:   '911',
        year:    2018,
        color:   'yellow',
        damage:  'front-bumper'
      },
      {
        user_id: 2,
        plate:   'CCC000',
        make:    'Nissan',
        model:   'Skyline',
        year:    1990,
        color:   'orange',
        damage:  'totalled'
      },
  ]);
}