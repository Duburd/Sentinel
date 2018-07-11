var faker = require('faker');

exports.seed = function (knex, Promise) {
  return knex('witnesses')
    .insert([{
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      testimony: faker.lorem.paragraph(),
      status: 'Read',
      report_id: 1
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 2
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 3
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 4
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 5
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 6
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 7
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 8
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 9
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 10
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 11
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 12
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 13
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 14
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 15
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 16
    },
    {
      status: 'Read',
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 17
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 18
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 19
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 20
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 21
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 22
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 23
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 24
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 25
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 26
    },
    {
      status: 'Unread',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 1
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 1
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 1
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 2
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 2
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 2
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 3
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 3
    },
    {
      status: 'Read',
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 4
    },
  ]);
};