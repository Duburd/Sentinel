var faker = require('faker');

exports.seed = function (knex, Promise) {
    return knex('vehicles')
    .insert([{
        user_id: 1,
        plate:   'AAA000',
        make:    'BMW',
        model:   'M3',
        year:    '2015',
        color:   'white',
        damage:  'passenger-side door'
      },
      {
        user_id: 2,
        plate:   'BBB000',
        make:    'Porsche',
        model:   '911',
        year:    '2018',
        color:   'yellow',
        damage:  'front-bumper'
      },
      {
        user_id: 3,
        plate:   'CCC000',
        make:    'Nissan',
        model:   'Skyline',
        year:    '1990',
        color:   'orange',
        damage:  'totalled'
      },
      {
        user_id: 4,
        plate:   'CCC000',
        make:    'Honda',
        model:   'Civic',
        year:    '1992',
        color:   faker.commerce.color(),
        damage:  'driver mirror'
      },
      {
        user_id: 5,
        plate:   'CCC000',
        make:    'Toyota',
        model:   'Celica',
        year:    '2004',
        color:   faker.commerce.color(),
        damage:  'bumper'
      },
      {
        user_id: 6,
        plate:   'CCC000',
        make:    'Ford',
        model:   'Escape',
        year:    '2000',
        color:   faker.commerce.color(),
        damage:  'totaled'
      },
      {
        user_id: 7,
        plate:   'CCC000',
        make:    'Dodge',
        model:   'Ram',
        year:    '2016',
        color:   faker.commerce.color(),
        damage:  'totaled'
      },
      {
        user_id: 8,
        plate:   'CCC000',
        make:    'Tesla',
        model:   'Model-S',
        year:    '2019',
        color:   faker.commerce.color(),
        damage:  'broken side mirror'
      },
      {
        user_id: 9,
        plate:   'CCC000',
        make:    'Ford',
        model:   'Explorer',
        year:    '1995',
        color:   faker.commerce.color(),
        damage:  'dented passenger door'
      },
      {
        user_id: 9,
        plate:   'CCC000',
        make:    'Audi',
        model:   'A5',
        year:    '2015',
        color:   faker.commerce.color(),
        damage:  'dented driver door'
      },
  ]);
}