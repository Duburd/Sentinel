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
        damage:  'totaled'
      },
      {
        user_id: 4,
        plate:   'DDD000',
        make:    'Honda',
        model:   'Civic',
        year:    '1992',
        color:   faker.commerce.color(),
        damage:  'driver mirror'
      },
      {
        user_id: 5,
        plate:   'EEE000',
        make:    'Toyota',
        model:   'Celica',
        year:    '2004',
        color:   faker.commerce.color(),
        damage:  'bumper'
      },
      {
        user_id: 6,
        plate:   'FFF000',
        make:    'Ford',
        model:   'Escape',
        year:    '2000',
        color:   faker.commerce.color(),
        damage:  'totaled'
      },
      {
        user_id: 7,
        plate:   'GGG000',
        make:    'Dodge',
        model:   'Ram',
        year:    '2016',
        color:   faker.commerce.color(),
        damage:  'totaled'
      },
      {
        user_id: 8,
        plate:   'HHH000',
        make:    'Tesla',
        model:   'Model-S',
        year:    '2019',
        color:   faker.commerce.color(),
        damage:  'broken side mirror'
      },
      {
        user_id: 9,
        plate:   'III000',
        make:    'Ford',
        model:   'Explorer',
        year:    '1995',
        color:   faker.commerce.color(),
        damage:  'dented passenger door'
      },
      {
        user_id: 10,
        plate:   'JJJ000',
        make:    'Audi',
        model:   'A5',
        year:    '2015',
        color:   faker.commerce.color(),
        damage:  'large scratch on right side'
      },
      {
        user_id: 11,
        plate:   'LLL000',
        make:    'Jeep',
        model:   'Cherokee',
        year:    '1997',
        color:   faker.commerce.color(),
        damage:  'large scratch on left side'
      },
      {
        user_id: 12,
        plate:   'KKK000',
        make:    'Chrysler',
        model:   'PT Cruiser',
        year:    '1992',
        color:   faker.commerce.color(),
        damage:  'large dent on hood'
      },
      {
        user_id: 13,
        plate:   'MMM000',
        make:    'Mini',
        model:   'Cooper S',
        year:    '1995',
        color:   faker.commerce.color(),
        damage:  'totaled'
      },
      {
        user_id: 14,
        plate:   'NNN000',
        make:    'Buick',
        model:   'Regal',
        year:    '1985',
        color:   faker.commerce.color(),
        damage:  'smashed passenger windows and passenger doors'
      },
      {
        user_id: 15,
        plate:   'PPP000',
        make:    'Bentley',
        model:   'Continental GT',
        year:    '2002',
        color:   faker.commerce.color(),
        damage:  'smashed driver door'
      },
      {
        user_id: 16,
        plate:   'QQQ000',
        make:    'Acura',
        model:   'MDX',
        year:    '2005',
        color:   faker.commerce.color(),
        damage:  'smashed bumper'
      },
      {
        user_id: 17,
        plate:   'RRR000',
        make:    'Bugatti',
        model:   'Type 32',
        year:    '2012',
        color:   faker.commerce.color(),
        damage:  'many large scratches on front end'
      },
      {
        user_id: 18,
        plate:   'SSS000',
        make:    'Ferrari',
        model:   'A5',
        year:    '2000',
        color:   faker.commerce.color(),
        damage:  'large dents and scratches on side'
      },
      {
        user_id: 19,
        plate:   'TTT000',
        make:    'Hyundai',
        model:   'Sonata',
        year:    '2017',
        color:   faker.commerce.color(),
        damage:  'door completely destroyed'
      },
      {
        user_id: 20,
        plate:   'UUU000',
        make:    'Cadillac',
        model:   'Escalade',
        year:    '2015',
        color:   faker.commerce.color(),
        damage:  'destroyed passenger mirror and large scratches on side'
      },
      {
        user_id: 21,
        plate:   'VVV000',
        make:    'Lexus',
        model:   'CT Hybrid',
        year:    '2014',
        color:   faker.commerce.color(),
        damage:  'broken windshield'
      },
      {
        user_id: 22,
        plate:   'WWW000',
        make:    'GMC',
        model:   'Acadia',
        year:    '2011',
        color:   faker.commerce.color(),
        damage:  'cracked window'
      },
      {
        user_id: 23,
        plate:   'XXX000',
        make:    'Maseratti',
        model:   'GranTurismo Convertible',
        year:    '2009',
        color:   faker.commerce.color(),
        damage:  'totaled'
      },
      {
        user_id: 24,
        plate:   'YYY000',
        make:    'Infiniti',
        model:   'J30',
        year:    '2012',
        color:   faker.commerce.color(),
        damage:  'totaled'
      },
      {
        user_id: 25,
        plate:   'ZZZ000',
        make:    'Jaguar',
        model:   'XE',
        year:    '1990',
        color:   faker.commerce.color(),
        damage:  'broken fender'
      },
      {
        user_id: 26,
        plate:   'AAA222',
        make:    'Dodge',
        model:   'Charger',
        year:    '2010',
        color:   faker.commerce.color(),
        damage:  'Busted'
      },
      {
        user_id: 27,
        plate:   'ZZZ000',
        make:    'Cadillac',
        model:   'AA',
        year:    '1995',
        color:   faker.commerce.color(),
        damage:  'Extensive damage to the left side'
      },
      {
        user_id: 2,
        plate:   'ZZZ000',
        make:    'Jaguar',
        model:   'JP',
        year:    '1985',
        color:   faker.commerce.color(),
        damage:  'Severely scratched and damaged on the right side'
      },
      {
        user_id: 1,
        plate:   'AAA888',
        make:    'Mclaren',
        model:   '570S',
        year:    '2013',
        color:   faker.commerce.color(),
        damage:  'smashed windshield'
      },
      {
        user_id: 1,
        plate:   'AAA111',
        make:    'Dodge',
        model:   'Ram',
        year:    '2018',
        color:   faker.commerce.color(),
        damage:  'scratched down the right side'
      },

  ]);
}