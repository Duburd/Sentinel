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
        user_id: 3,
        plate:   'CCC000',
        make:    'Nissan',
        model:   'Skyline',
        year:    1990,
        color:   'orange',
        damage:  'totalled'
      },
      {
        user_id: 4,
        plate:   'CCC000',
        make:    'Honda',
        model:   'Civic',
        year:    faker.date.past(),
        color:   faker.commerce.color(),
        damage:  'driver mirror'
      },
      {
        user_id: 5,
        plate:   'CCC000',
        make:    'Toyota',
        model:   'Celica',
        year:    faker.date.past(),
        color:   faker.commerce.color(),
        damage:  'bumper'
      },
      {
        user_id: 6,
        plate:   'CCC000',
        make:    'Ford',
        model:   'Escape',
        year:    faker.date.past(),
        color:   faker.commerce.color(),
        damage:  'keyed'
      },
      
  ]);
}