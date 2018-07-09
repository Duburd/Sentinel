var faker = require('faker');

exports.seed = function (knex, Promise) {
  return knex('media')
    .insert([{
      type: 'image',
      uri: 'https://s3.amazonaws.com/lhl-insurance-buddy/0bfd79b6-9c67-4d3c-8cc7-c6e196770190.JPG',
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
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 6
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 7
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 8
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 9
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 10
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 11
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 12
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 13
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 14
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 15
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 16
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 17
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 18
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 19
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 20
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 21
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 22
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 23
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 24
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 25
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 26
    },
    {
      type: 'image',
      uri: faker.image.cats(),
      report_id: 27
    },
    {
      type: 'image',
      uri: 'https://s3.amazonaws.com/lhl-insurance-buddy/bmw_m3_2008_car_for_parts_only_184352_05.jpg',
      report_id: 1
    },
    {
      type: 'image',
      uri: 'https://s3.amazonaws.com/lhl-insurance-buddy/9ed661da20509554c098bbdfe010c2acx.jpg',
      report_id: 1
    },
    {
      type: 'image',
      uri: 'https://s3.amazonaws.com/lhl-insurance-buddy/New-BMW-M3-Convertible-White-Twin-Turbo-jpg.jpg',
      report_id: 1
    },
  ]);
};
